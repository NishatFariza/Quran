export enum RevelationPlace {
  Madinah = "madinah",
  Makkah = "makkah",
}

export interface TranslatedName {
  language_name: LanguageName;
  name: string;
}

export enum LanguageName {
  English = "english",
}

export interface Chapter {
  id: number;
  revelation_place: RevelationPlace;
  revelation_order: number;
  // bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: number[];
  translated_name: TranslatedName;
}
