export interface IThemeData {
  theme: {
    color: {
      600: string;
      700: string;
      800: string;
      900: string;
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
