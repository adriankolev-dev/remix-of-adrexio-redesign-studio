// Mobile Applications Data
import oneBetterImg from "@/assets/apps/1better.png";
import trapflixImg from "@/assets/apps/trapflix.png";
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
    description: "Дневник за хранене и навици. Помага на хората да следят какво ядат и да подобряват здравето си малко по малко.",
    category: "Здраве & Фитнес",
    appStoreUrl: "https://apps.apple.com/bg/app/1-better/id6743937908",
    image: oneBetterImg,
    rating: "5.0",
    downloads: "10K+",
    contribution: "Цялото iOS приложение",
    accentColor: "text-emerald-500"
  },
  {
    id: "trapflix",
    name: "Trapflix",
    subtitle: "JT THE BIGGA FIGGA FILMS",
    description: "Стрийминг на независими хип-хоп филми и градско кино, основан от JT the Bigga Figga. Истории направо от улицата.",
    category: "Развлечения",
    appStoreUrl: "https://apps.apple.com/bg/app/trapflix/id1623857411",
    image: trapflixImg,
    rating: "4.5",
    downloads: "50K+",
    contribution: "Мобилното приложение",
    accentColor: "text-red-500"
  },
  {
    id: "thisisdope",
    name: "ThisIsDope",
    subtitle: "share, rate & talk",
    description: "Социална мрежа, в която хората споделят и оценяват продукти, видеа, линкове и събития с приятели, семейство или фенове. Всичко споделено се подрежда само.",
    category: "Социални мрежи",
    appStoreUrl: "https://apps.apple.com/bg/app/thisisdope/id6450775136",
    image: thisisdopeImg,
    rating: "5.0",
    downloads: "5K+",
    contribution: "Цялото iOS приложение",
    accentColor: "text-gray-100"
  },
  {
    id: "xcite",
    name: "Xcite Mobile Trading",
    subtitle: "XCITE: Trading revolution",
    description: "Приложение за търговия от телефона, направено за професионални трейдъри: изчистен дизайн, тъмен режим, AI сигнали и разпознаване на тенденции.",
    category: "Финанси",
    appStoreUrl: "https://apps.apple.com/bg/app/xcite-mobile-trading/id6444027327",
    image: xciteImg,
    rating: "5.0",
    downloads: "10K+",
    contribution: "UI/UX дизайн и разработка",
    accentColor: "text-cyan-400"
  }
];
