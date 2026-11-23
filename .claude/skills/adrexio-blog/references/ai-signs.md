# Signs of AI writing: full catalog

Source: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing (WikiProject AI Cleanup), read 2026-10-18.
Each sign: what it is, the English tells from the page, Bulgarian equivalents (my own mapping, the page is English-only), and the fix.

The page's own warning, which is the most important rule here: **these are symptoms, not the problem.** Hiding the symptom (swapping a word for a synonym) only makes the text harder to detect while keeping it bad. The real problems are vagueness, unsupported claims, puffery and padding. Fix those.

The root cause (from the page): LLMs regress to the mean. They replace specific, unusual facts with generic, positive, important-sounding statements that could fit any topic. "Inventor of the first train-coupling device" becomes "a revolutionary titan of industry". The text gets **less specific and more exaggerated at the same time.**

---

## A. Content

### A1. Undue emphasis on significance, legacy, broader trends
Puffing up importance by tying ordinary facts to a bigger story.
- EN: stands/serves as, is a testament/reminder, a crucial/pivotal/vital/significant/key role/moment, underscores/highlights its importance, reflects broader, symbolizing its ongoing/enduring/lasting, contributing to the, setting the stage for, marking/shaping the, represents/marks a shift, key turning point, evolving landscape, focal point, indelible mark, deeply rooted, "this distinction matters because", "generated debate", "prompted broader reflection", "raising questions about".
- Also: hedging that something is minor and then praising it anyway ("Though it saw only limited application, it contributes to the broader history...").
- BG: играе ключова/важна/решаваща роля, е доказателство за, е свидетелство за, бележи повратна точка, поставя началото на, отразява по-широка тенденция, оставя траен отпечатък, дълбоко вкоренен, във все по-променящия се пейзаж, това има значение, защото…, поражда дебат, повдига въпроси за.
- Fix: delete the significance clause. State the fact. If the significance is real, show it with a concrete consequence or number.

### A2. Canned emphasis on notability, attribution, media coverage
Listing where something was covered instead of saying what the coverage says.
- EN: independent coverage, local/regional/national media outlets, trade publications, cited/featured/profiled in, written by a leading expert, maintains an active social media presence, was identified by.
- BG: отразен в редица медии, споменат в водещи издания, има активно присъствие в социалните мрежи, признат от експерти, получил широк отзвук.
- Fix: say what the source actually reported, with the source named once. No "and other prominent outlets".

### A3. Superficial analyses (trailing -ing clauses)
A participle phrase stuck on the end of a factual sentence to editorialize.
- EN: highlighting/underscoring/emphasizing..., ensuring..., reflecting/symbolizing..., contributing to..., cultivating/fostering..., encompassing..., enhancing..., valuable insights, align/resonate with.
- BG: …, което подчертава…; …, като по този начин гарантира…; …, което отразява…; …, допринасяйки за…; …, създавайки…; …, затвърждавайки…; ценни прозрения; резонира с; в синхрон с.
- Fix: cut the clause. If it carries a real fact, make it its own sentence with a subject and a plain verb.

### A4. Promotional, advertisement-like language
Travel-guide or press-release tone, even when asked for neutral text.
- EN: boasts a, vibrant, rich, profound, enhancing, showcasing, exemplifies, commitment to, natural beauty, nestled, in the heart of, groundbreaking, renowned, featuring, diverse array, seamless, cutting-edge, world-class.
- BG: може да се похвали с, разполага с богат…, уникален, впечатляващ, неповторим, в сърцето на, сгушен, иновативен, революционен, водещ, световноизвестен, разнообразие от, отдаденост на, ангажимент към, безупречен, първокласен, перфектен, най-висок клас.
- Note: newer models are subtly positive rather than "the best". Watch for a steady warm glow on every sentence.
- Fix: replace adjectives with checkable facts (model of the device, number of clients, year, price). Business copy may sell, but every claim must be one the client can back up.

### A5. Vague expression of connection or association
Saying X is "associated with" Y instead of stating the relationship.
- EN: in connection with, connected with/to, in association with, associated with, particularly/widely associated.
- BG: свързан с, във връзка с, асоцииран с, има отношение към.
- Fix: name the relationship: "was CEO of", "taught at", "founded", "performs".

### A6. Vague attributions and overgeneralized opinions (weasel words)
- EN: industry reports, observers have cited, experts argue, some critics argue, several sources (when one is cited), researchers and conservationists, "such as" before what is actually the full list.
- BG: експертите смятат, специалистите са единодушни, според редица източници, много хора смятат, изследванията показват (без цитат), както и други.
- Fix: name who said it and cite it, or drop the claim. One source is "one source", not "several".

### A7. Formulaic "challenges and future prospects"
"Despite its [praise], X faces several challenges... Despite these challenges, X continues to thrive." Sections titled "Challenges and Future Outlook".
- BG: Въпреки успехите си, X е изправен пред редица предизвикателства…; Въпреки тези предизвикателства…; Поглед към бъдещето; Перспективи.
- Fix: list the real problems with specifics, or leave the section out. No upbeat closing line.

### A8. "Awards and recognition" style headings, "X and Y" headings
- BG: „Награди и признание“, „Наследство и влияние“, „Мисия и визия“ when there is nothing concrete under them.
- Fix: a heading must name what the section contains.

### A9. Hedging disclaimers about sources and usage (very common in 2026)
- EN: while specific details are limited/scarce, not widely available/documented, based on available information, in the provided sources, "[claim] should be treated as ... rather than ...", "does not by itself establish", "maintains a low profile".
- BG: въпреки че конкретните данни са ограничени, по наличната информация, няма публично достъпни данни, това не доказва само по себе си, трябва да се разглежда като… а не като…
- Fix: if you don't know, either find out or say plainly what is unknown in one short clause. Do not speculate about what the missing info "likely" is.

---

## B. Language and grammar

### B1. High density of "AI vocabulary"
One or two words are coincidence; many together are the strongest single tell. Words drift by model era:
- 2023–mid 2024: Additionally (sentence-initial), boasts, bolstered, crucial, delve, emphasizing, enduring, garner, intricate/intricacies, interplay, key (adj.), landscape (abstract), meticulously, pivotal, underscore, tapestry, testament, valuable, vibrant.
- mid 2024–mid 2025: align with, bolstered, crucial, emphasizing, enhance, enduring, fostering, highlighting, pivotal, showcasing, underscore, vibrant.
- mid 2025–mid 2026: emphasizing, enhance, highlighting, showcasing (+ notability/coverage words).
- mid 2026 on: challenge, clearer, dependable, echoed, foster, leverage, matters, multifaceted, practical, prioritize, quietly, steady, universally, plus short sentences stuck at 8–20 words with only commas and periods.
- Also: deep dive, robust, seamless, navigate (figurative), realm, embark, unlock, elevate, holistic, nuanced, comprehensive.
- BG equivalents to watch: освен това (в началото на всяко второ изречение), ключов, решаващ, жизненоважен, задълбочен, всеобхватен, цялостен, холистичен, безпроблемен, надежден, устойчив (figurative), многостранен, нюансиран, гоблен/мозайка от (figurative), пейзаж (figurative), свидетелство, подчертава, акцентира, затвърждава, насърчава, подобрява, оптимизира, отключва, издига на ново ниво, потапяне в, пътешествие (figurative), съществен, значим.
- Fix: use the plain word or delete it. Take the list literally: it's these words, not their synonyms.

### B2. Avoiding plain "is/are/has"
- EN: serves as / stands as / marks / functions as / represents a; boasts / features / maintains / offers a (meaning "has"); "refers to" in a definition.
- BG: служи като, се явява, представлява, функционира като, предлага (вместо „има“), разполага с (вместо „има“), се отличава с, се нарежда сред.
- Fix: "е", "има", "са". Plain copulas read human.

### B3. Negative parallelisms
- "Not just X, but also Y", "It's not X, it's Y", "no X, no Y, just Z", "Y rather than X" (very common in recent output), and the multi-sentence version ("X. Y's life, however, took a path...").
- BG: не просто…, а…; не само…, но и…; това не е…, това е…; без…, без…, само…; вместо… (като риторична контра).
- Fix: state the positive claim directly. Only contrast when a reader really holds the wrong belief and you name it.

### B4. Rule of three
Triplets of adjectives or phrases used to sound complete: "tiles, metals, and plastics", "fast, safe, and effective".
- BG: бързо, безопасно и ефективно; професионализъм, грижа и внимание.
- Fix: keep the number of items the facts support. Two is fine, four is fine. Vary list length.

### B5. Lead that defines the title as if it were an entity
"List of X refers to..." / "Лазерната епилация в София е…" as if the topic were a named thing. Start with the substance.

---

## C. Style and formatting

### C1. Title Case In Headings
Capitalizing Every Main Word in headings (an English tell). In Bulgarian only the first word is capitalized.

### C2. Overuse of boldface
Bold on every key term, "key takeaways" style, the same phrase bolded each time. Fix: bold at most the one thing a skimmer must not miss per section, or none.

### C3. Inline-header vertical lists
"- **Header**: description" repeated down a list. Very strong tell when combined with bold and Markdown. Fix: prose, or a list of plain items, or a table if it's genuinely tabular.

### C4. Heading errors
Repeating the document title as the first heading; skipping heading levels; headings that only contain sub-headings with no text; too many headings for little text.

### C5. Emoji as formatting
Emoji in front of headings or bullets (✨ 🚀 📌 ✅). Fix: none, unless the brand voice really uses one.

### C6. Unusual tables
Small, two-column tables that should be a sentence. Fix: tables only for real comparison across rows and columns.

### C7. Curly quotes in English / mixed quote styles
ChatGPT and DeepSeek use “ ” and ’; mixing straight and curly in one text is a tell. (Bulgarian correctly uses „…“; keep that, just be consistent.)

### C8. Em dashes (overuse, 2022–2026) and the new opposite sign
- Old tell: many em dashes, often with spaces around them, where a comma, colon or parentheses would do, used for "punchy" sales rhythm.
- New tell (late 2026): models hard-coded to avoid dashes now use only commas and periods, with short sentences of uniform length. Monotone punctuation is itself a sign.
- Fix: at most an occasional dash. Use the full range: colons, parentheses, semicolons, questions. Vary sentence length (some 5 words, some 30).

### C9. Elegant variation (older models)
Never repeating a noun: "the artists", "these creators", "the non-conformists", "their talent" for the same thing. Fix: repeat the clear word.

### C10. Section summaries and conclusions (older models)
"In summary", "In conclusion", "Overall", a closing paragraph restating the section. BG: В заключение, Обобщено, Като цяло, Накратко казано (as a closer). Fix: end on the last real point.

### C11. Didactic disclaimers (older models)
"It's important to note", "worth noting", "may vary". BG: Важно е да се отбележи, Струва си да се спомене, Трябва да се има предвид, Резултатите може да варират. Fix: just say the thing.

---

## D. Communication meant for the user leaking into the text

### D1. Chatbot correspondence
"Certainly!", "Of course!", "Here is a...", "I hope this helps", "Let me know", "Would you like...", "You're absolutely right!", "more detailed breakdown".
- BG: Разбира се!, Ето…, Надявам се това да помогне, Кажете ми, ако…, Искате ли да…, Абсолютно сте прав!
- Fix: never in a deliverable.

### D2. Placeholders and fill-in templates
"[Entertainer's Name]", "(Add URL here)", "2025-xx-xx", "<!-- add if available -->". Fix: fill it or ask.

### D3. Clerk / customer-service tone
"I have carefully reviewed", "I apologize for any inconvenience", "If there are specific issues, please point them out", "I hope this message finds you well", "I am writing to...". BG: Надявам се писмото да ви завари в добро здраве, Пиша ви, за да…, Извинявам се за евентуалното неудобство, Внимателно прегледах.

### D4. Procedural self-assurance (change logs, summaries of work)
- Stacked assurances of compliance and quality: "ensured that... adheres to", "refined", "enhanced", "streamlined", "improved clarity and flow", "neutral tone", "in compliance with".
- Mentioning what was preserved or avoided: "while preserving the original meaning", "retained", "avoided".
- Overemphasis that content is "sourced", "verified", "from independent sources" without saying what was added.
- Itemizing parameter and template names.
- BG: прецизирах, оптимизирах, подобрих яснотата и четивността, при запазване на оригиналния смисъл, в съответствие с изискванията, добавих проверена информация от независими източници.
- Fix: say concretely what changed ("Added the 2018 founding year and the GentleLase Pro model"). Don't certify your own work.

### D5. Markup leakage
Markdown (**bold**, ## headings, [text](url), --- breaks) in places that don't render Markdown; internal citation artifacts (oaicite, contentReference, turn0search0, [cite: 1], grok_card). Fix: use the target format.

---

## E. Citations (for any text with sources)
Broken or invented links, invalid DOIs/ISBNs, DOIs pointing to unrelated papers, book citations without pages, utm_source=chatgpt.com in URLs, placeholder dates, outdated access dates. Fix: only cite what you opened and checked.

---

## F. Signs of human writing (what to lean toward)
From the page, more common in human text than AI text:
- Simple "is/has" phrases: "there is a", "it has a". BG: „има“, „е“.
- Plain words over stiff synonyms: wrote (not authored), moved (not relocated), used (not utilized), tried (not attempted), died (not passed away). BG: „използва“ (не „осъществява употреба“), „прави“ (не „извършва“), „купи“ (не „осъществи покупка“), „помага“ (не „спомага за“).
- Definite and superlative statements when true: "one of the best", "the only", "the first". (Humans commit; models hedge. Only when the fact supports it.)
- Normal qualifiers and intensifiers: very, perhaps, tends to. BG: много, може би, обикновено.
- Ordinary wordy bits: "as a result of", "in order to", "the fact that". BG: „за да“, „фактът, че“.
- Being able to explain every choice and source.

## G. Ineffective indicators (don't over-correct)
Not reliable tells, so don't "fix" them: perfect grammar; mixing casual and formal register; formal or academic vocabulary in general; transition words in isolation; unsourced content; correct markup. And don't strip all personality to avoid "AI words": plain, varied, specific human prose is the goal, not a sterile list of short sentences.
