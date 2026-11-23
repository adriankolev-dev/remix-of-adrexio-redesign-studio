#!/usr/bin/env python3
"""Flag signs of AI writing in a text (Bulgarian and English).

Usage:
  python3 check_ai_signs.py FILE [FILE ...]   # .txt .md .html; HTML tags are stripped
  echo "text" | python3 check_ai_signs.py -

Based on https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing (see references/signs.md).
A hit is a prompt to look again, not proof. Fix the underlying vagueness, not just the word.
"""
import html
import re
import statistics
import sys

# (category, regex). Case-insensitive. Bulgarian stems cover inflections.
PATTERNS = [
    # A1 significance / legacy
    ("A1 значимост", r"\b(играе|играят|изигра\w*) (ключова|важна|решаваща|основна|съществена) роля"),
    ("A1 значимост", r"\b(е|са|стои като) (доказателство|свидетелство) за\b"),
    ("A1 значимост", r"\b(повратн\w+ (точка|момент)|траен отпечатък|дълбоко вкоренен\w*|поставя началото|бележи (нов|началото))"),
    ("A1 значимост", r"\b(по-широк\w* (тенденция|контекст|дебат)|поражда\w* дебат|повдига\w* въпроси)"),
    ("A1 значимост", r"\b(това има значение|това е важно), защото"),
    ("A1 significance", r"\b(stands|serves) as\b|\bis a (testament|reminder)\b|\b(pivotal|crucial|vital) (role|moment)\b"),
    ("A1 significance", r"\b(underscores|highlights) (its|the) (importance|significance)\b|\breflects broader\b|\bsetting the stage\b|\bevolving landscape\b|\bindelible mark\b|\bdeeply rooted\b|\bkey turning point\b"),
    # A2 coverage
    ("A2 медийно отразяване", r"\b(отразен\w* в (редица|много|водещи)|активно присъствие в социалните|получи\w* широк отзвук|признат\w* от експерт)"),
    ("A2 coverage", r"\b(independent coverage|media outlets|trade publications|featured in|profiled in|active social media presence)\b"),
    # A3 trailing participle analysis
    ("A3 повърхностен анализ", r",\s*(което|като по този начин|с което) (подчертава|гарантира|отразява|допринася|затвърждава|създава|осигурява|показва)"),
    ("A3 повърхностен анализ", r",\s*като (подчертава|гарантира|отразява|допринася|затвърждава|създава|осигурява)\b"),
    ("A3 повърхностен анализ", r",\s*(подчертавайки|гарантирайки|отразявайки|допринасяйки|затвърждавайки|създавайки|осигурявайки)\b"),
    ("A3 повърхностен анализ", r"\b(ценни прозрения|резонира\w* с|в синхрон с)\b"),
    ("A3 superficial", r",\s*(highlighting|underscoring|emphasizing|ensuring|reflecting|symbolizing|contributing to|fostering|cultivating|showcasing|enhancing)\b|\bvaluable insights\b|\bresonates? with\b|\baligns? with\b"),
    # A4 promotional
    ("A4 реклама", r"\b(може да се похвали|уникал\w+|впечатляващ\w*|неповторим\w*|в сърцето на|сгушен\w*|революцион\w+|световноизвест\w+|безупреч\w+|първокласн\w+|перфектн\w+|най-висок клас|богат\w* (опит|история|наследство|гама)|разнообразие от|ангажимент към|отдаденост на)"),
    ("A4 promotional", r"\b(boasts?|vibrant|nestled|in the heart of|groundbreaking|renowned|diverse array|commitment to|seamless(ly)?|cutting-edge|world-class|breathtaking|showcas\w+|exemplif\w+)\b"),
    # A5 vague association
    ("A5 неясна връзка", r"\b(асоцииран\w*|във връзка с|в асоциация с)\b"),
    ("A5 association", r"\b(in connection with|associated with|in association with|connected (with|to))\b"),
    # A6 weasel
    ("A6 неясен източник", r"\b(експертите (смятат|твърдят|са единодушни)|специалистите (смятат|твърдят)|според редица (източници|изследвания)|изследванията показват|много хора смятат|както и други)\b"),
    ("A6 weasel", r"\b(experts (argue|say|agree)|observers have|industry reports|some critics|several sources|studies show|researchers and)\b"),
    # A7 challenges formula
    ("A7 предизвикателства", r"\b(въпреки (успех\w*|тези предизвикателства)|изправен\w* пред (редица|няколко) предизвикателства|поглед към бъдещето|перспективи за развитие)"),
    ("A7 challenges", r"\b(despite (its|these|their) (success|challenges)|faces (several|many|numerous) challenges|future (outlook|prospects))\b"),
    # A9 hedging disclaimers
    ("A9 уговорки", r"\b(конкретните данни са ограничени|по наличната информация|няма публично достъпн\w+|не доказва само по себе си|трябва да се разглежда като)"),
    ("A9 hedging", r"\b(details are (limited|scarce)|not widely (available|documented)|based on available information|in the provided sources|does not by itself establish|maintains a low profile|should be treated as)\b"),
    # B1 AI vocabulary
    ("B1 AI речник", r"\b(ключов\w*|решаващ\w*|жизненоважн\w*|задълбочен\w*|всеобхватн\w*|холистичн\w*|безпроблемн\w*|многостран\w*|нюансиран\w*|подчертава\w*|акцентира\w*|затвърждава\w*|насърчава\w*|оптимизира\w*|отключва\w*|на ново ниво|потапяне в|пътешестви\w+ към|гоблен|мозайка от|съществен\w*|значим\w*)\b"),
    ("B1 AI vocabulary", r"\b(additionally|delve\w*|tapestry|testament|pivotal|crucial|intricate\w*|intricacies|interplay|meticulous\w*|underscore\w*|bolster\w*|garner\w*|enduring|fostering|foster|leverage\w*|multifaceted|robust|realm|embark\w*|elevate\w*|holistic|nuanced|landscape|navigat\w+ (the|this|these)|unlock\w*)\b"),
    # B2 copula avoidance
    ("B2 избягване на „е/има“", r"\b(служи като|се явява|функционира като|се отличава с|се нарежда сред|разполага с)\b"),
    ("B2 copula avoidance", r"\b(serves as|stands as|functions as|operates as|refers to)\b"),
    # B3 negative parallelism
    ("B3 негативен паралелизъм", r"\bне (е |са )?(просто|само|единствено)\b[^.!?\n]{0,80}\b(а|но и)\b"),
    ("B3 негативен паралелизъм", r"\b(това не е|не става дума за)\b[^.!?\n]{0,60}\b(а|това е)\b"),
    ("B3 negative parallelism", r"\bnot (just|only|merely)\b[^.!?\n]{0,80}\bbut\b|\bit'?s not\b[^.!?\n]{0,60}\bit'?s\b|\brather than\b"),
    # C10/C11 conclusions and didactic disclaimers
    ("C10 обобщение", r"(^|[.!?]\s+)(в заключение|обобщено|като цяло|накратко казано)\b"),
    ("C10 summary", r"(^|[.!?]\s+)(in conclusion|in summary|overall,|to sum up)\b"),
    ("C11 назидателна уговорка", r"\b(важно е да се отбележи|струва си да се (спомене|отбележи)|трябва да се има предвид|резултатите може да варират)"),
    ("C11 didactic", r"\b(it'?s (important|crucial|worth) (to note|noting|remembering)|worth noting|may vary)\b"),
    # D chatbot leakage / clerk tone / procedural assurance
    ("D1 чатбот", r"\b(разбира се!|ето (го|ги|и)?\s*[:–-]|надявам се (това|да) (да )?помогне|кажете ми,? ако|искате ли да|абсолютно сте прав)"),
    ("D1 chatbot", r"\b(certainly!|of course!|here is (a|the)|i hope this helps|let me know|would you like|you'?re absolutely right|is there anything else)\b"),
    ("D2 шаблон", r"\[[^\]]*(име|name|url|дата|date)[^\]]*\]|\((add|добавете)[^)]*\)|20\d\d-xx-xx"),
    ("D3 чиновнически тон", r"\b(надявам се (писмото|съобщението) да ви завари|пиша ви,? за да|извинявам се за (евентуалното|всяко) неудобство|внимателно прегледах)"),
    ("D3 clerk tone", r"\b(hope this (message|email) finds you|i am writing to|apologi[sz]e for any inconvenience|carefully reviewed)\b"),
    ("D4 самоуверения", r"\b(прецизирах|оптимизирах|подобрих яснотата|при запазване на (оригиналния|смисъла)|в съответствие с (изискванията|насоките)|проверена информация от независими)"),
    ("D4 procedural", r"\b(ensur(ed|ing) that|while preserving|streamlined|improved (clarity|flow|readability)|in compliance with|neutral tone|encyclopedic tone)\b"),
    ("D5 markup", r"oaicite|contentReference|turn0search\d|\[cite: ?\d+\]|grok_card|utm_source=chatgpt"),
]

EMOJI = re.compile("[\U0001F300-\U0001FAFF\u2600-\u260F\u2613-\u27BF]")  # skips ☐☑☒ checkboxes
INLINE_HEADER = re.compile(r"^\s*([-*•–]|\d+\.)\s*(\*\*|<b>|<strong>)[^:*<]{1,60}(\*\*|</b>|</strong>)\s*[:–-]", re.M)
TRIPLET = re.compile(r"\b[\wа-яА-Я-]+, [\wа-яА-Я-]+,? (и|and) [\wа-яА-Я-]+\b")


def strip_html(t):
    t = re.sub(r"<(script|style)\b.*?</\1>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<br\s*/?>|</(p|div|li|h\d|tr)>", "\n", t, flags=re.I)
    return html.unescape(re.sub(r"<[^>]+>", " ", t))


def check(name, text):
    raw = text
    if "<" in text and re.search(r"</\w+>", text):
        text = strip_html(text)
    lines = text.split("\n")
    hits = []
    for i, line in enumerate(lines, 1):
        for cat, pat in PATTERNS:
            for m in re.finditer(pat, line, flags=re.I | re.M):
                s = max(0, m.start() - 40)
                hits.append((cat, i, line[s:m.end() + 40].strip()))
    words = re.findall(r"[\wа-яА-Я'-]+", text)
    n = max(1, len(words))
    prose = re.sub(r"(?<!\n)\n(?!\n)", " ", text)  # join wrapped lines, keep paragraph breaks
    sentences = [s for s in re.split(r"(?<=[.!?])\s+|\n{2,}", prose) if len(re.findall(r"\w+", s)) >= 3]
    lens = [len(re.findall(r"\w+", s)) for s in sentences]

    print(f"\n=== {name}: {len(words)} думи, {len(sentences)} изречения, {len(hits)} попадения")
    by_cat = {}
    for c, i, ctx in hits:
        by_cat.setdefault(c, []).append((i, ctx))
    for c in sorted(by_cat):
        print(f"\n[{c}] x{len(by_cat[c])}")
        for i, ctx in by_cat[c][:12]:
            print(f"  ред {i}: …{ctx}…")
        if len(by_cat[c]) > 12:
            print(f"  … и още {len(by_cat[c]) - 12}")

    print("\n--- Форма")
    dashes = text.count("—") + len(re.findall(r" – ", text))
    print(f"  Тирета (— и „ – “): {dashes} ({dashes * 1000 / n:.1f} на 1000 думи; над ~5 е много)")
    bold = len(re.findall(r"\*\*[^*]+\*\*|<(b|strong)>", raw, flags=re.I))
    print(f"  Удебелявания: {bold} ({bold * 1000 / n:.1f} на 1000 думи; над ~8 е много)")
    ih = len(INLINE_HEADER.findall(raw))
    if ih:
        print(f"  Списъци „- **Заглавие**: текст“: {ih} (силен признак)")
    em = len(EMOJI.findall(text))
    if em:
        print(f"  Емоджита: {em}")
    tri = len(TRIPLET.findall(text))
    print(f"  Изброявания по три („X, Y и Z“): {tri} ({tri * 1000 / n:.1f} на 1000 думи)")
    curly = len(re.findall(r"[“”’]", text))
    straight = len(re.findall(r"[\"']", text))
    if curly and straight:
        print(f"  Смесени кавички: {curly} извити и {straight} прави")
    if len(lens) >= 5:
        sd = statistics.pstdev(lens)
        short_band = sum(8 <= x <= 20 for x in lens) / len(lens)
        print(f"  Дължина на изреченията: средно {statistics.mean(lens):.1f}, отклонение {sd:.1f} думи, "
              f"{short_band:.0%} са между 8 и 20 думи")
        if sd < 5 or short_band > 0.8:
            print("  ! Еднообразен ритъм: изреченията са почти еднакво дълги (признак от 2026). Смесете кратки и дълги.")
    starts = [re.findall(r"\w+", s)[0].lower() for s in sentences if re.findall(r"\w+", s)]
    common = {w: starts.count(w) for w in set(starts) if starts.count(w) >= max(3, len(starts) // 8)}
    if common:
        print(f"  Повтарящи се начала на изречения: {common}")
    return len(hits)


def main():
    args = sys.argv[1:] or ["-"]
    total = 0
    for a in args:
        text = sys.stdin.read() if a == "-" else open(a, encoding="utf-8", errors="replace").read()
        total += check(a, text)
    print("\nПопаденията са повод да се прочете отново, не доказателство. Поправете неясното, не само думата.")


if __name__ == "__main__":
    main()
