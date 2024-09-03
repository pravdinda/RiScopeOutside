
export interface PageWelcomeComponent {
  title: string;
  description: string;
  showFooter: boolean;
  isDark?: boolean;
}
export interface WelcomeFormComponent {
  isDark?: boolean;
}
export interface InputFormComponent {
  inputType: string;
  inputPlaceholder: string;
  isDark?: boolean;
}
export interface PriceValue {
  currency: string;
  price: string | number;
  period: string;
  launched: {
    day: string;
    month: string;
  };
  structure: Array<string>;
}
export interface Mechanic {
  title: string;
  description: string;
  image: string;
  icon: string;
  list: Array<string>;
}
export interface Opportunities {
  title: string;
  text: string;
}
export interface Question {
  question: string;
  answer: string;
}
export interface Logo {
  status: string;
  isWhite?: boolean;
}