export interface IThemeData {
  theme: {
    color: {
      "1": string;
      "2": string;
      "3": string;
      "4": string;
    };
    sizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    feedback: {
      success: string;
      negative: string;
      info: string;
      warning: string;
    };
    accentGreen: {
      Primary: string;
      Light: string;
      Dark: string;
    };
    accentRed: {
      Primary: string;
      Light: string;
      Dark: string;
    };
  };
}
