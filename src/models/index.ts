export interface StyleCustomizationSettings {
  bgColor?: string;
  textColor?: string;
  btnColor?: string;
}

export interface CustomizationSettings extends StyleCustomizationSettings {
  locale?: string;
}

export interface Period {
  from: string;
  to: string;
}
