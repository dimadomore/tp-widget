export interface CustomizationSettings {
  bgColor?: string;
  textColor?: string;
  btnColor?: string;
  locale?: string;
}

export enum Locale {
  EN = 'en',
}

export interface Period {
  from: string;
  to: string;
}
