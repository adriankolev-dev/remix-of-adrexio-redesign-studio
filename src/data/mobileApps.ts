// Mobile Applications Data
import oneBetterImg from "@/assets/apps/1better.png";
import trapflixImg from "@/assets/apps/trapflix.png";
import smuleImg from "@/assets/apps/smule.png";
import thisisdopeImg from "@/assets/apps/thisisdope.png";
import xciteImg from "@/assets/apps/xcite.png";

export interface MobileApp {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  appStoreUrl: string;
  image: string;
  rating?: string;
  downloads?: string;
  contribution: string; // What our team did
  accentColor: string;
}

export const mobileApps: MobileApp[] = [
  {
    id: "1-better",
    name: "1% Better!",
    subtitle: "Daily diary",
    description: "Персонален wellness планировчик и дневник за хранене, който помага на потребителите да проследяват навиците си и да подобряват здравето си постепенно.",
    category: "Здраве & Фитнес",
    appStoreUrl: "https://apps.apple.com/bg/app/1-better/id6743937908",
    image: oneBetterImg,
    rating: "5.0",
    downloads: "10K+",
    contribution: "Пълна разработка на iOS приложението",
    accentColor: "text-emerald-500"
  },
  {
    id: "trapflix",
    name: "Trapflix",
    subtitle: "JT THE BIGGA FIGGA FILMS",
    description: "Стрийминг платформа за независими хип-хоп филми и урбан съдържание, основана от JT the Bigga Figga. Автентични истории директно от улицата.",
    category: "Развлечения",
    appStoreUrl: "https://apps.apple.com/bg/app/trapflix/id1623857411",
    image: trapflixImg,
    rating: "4.5",
    downloads: "50K+",
    contribution: "Разработка на мобилното приложение",
    accentColor: "text-red-500"
  },
  {
    id: "smule",
    name: "Smule: Sing & Record Karaoke",
    subtitle: "Duets, Reverse Singing, AI FX",
    description: "Водещо караоке приложение с над 10 милиона песни. Потребителите могат да записват, да пеят дуети с приятели или артисти и да използват професионални AI гласови ефекти.",
    category: "Музика",
    appStoreUrl: "https://apps.apple.com/bg/app/smule-sing-record-karaoke/id509993510",
    image: smuleImg,
    rating: "4.5",
    downloads: "100M+",
    contribution: "Част от екипа за разработка",
    accentColor: "text-pink-500"
  },
  {
    id: "thisisdope",
    name: "ThisIsDope",
    subtitle: "share, rate & talk",
    description: "Социална платформа за споделяне и оценяване на продукти, медии, линкове и събития с приятели, семейство или фенове. Всичко споделено се организира автоматично.",
    category: "Социални мрежи",
    appStoreUrl: "https://apps.apple.com/bg/app/thisisdope/id6450775136",
    image: thisisdopeImg,
    rating: "5.0",
    downloads: "5K+",
    contribution: "Пълна разработка на iOS приложението",
    accentColor: "text-gray-100"
  },
  {
    id: "xcite",
    name: "Xcite Mobile Trading",
    subtitle: "XCITE: Trading revolution",
    description: "Модерна платформа за мобилна търговия с изчистен дизайн, тъмен режим, AI сигнали и разпознаване на тенденции за професионални трейдъри.",
    category: "Финанси",
    appStoreUrl: "https://apps.apple.com/bg/app/xcite-mobile-trading/id6444027327",
    image: xciteImg,
    rating: "5.0",
    downloads: "10K+",
    contribution: "UI/UX дизайн и разработка",
    accentColor: "text-cyan-400"
  }
];
