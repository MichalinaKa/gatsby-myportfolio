/* eslint-disable import/prefer-default-export */
export const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    yellow: "#fdffba",
    violet: "#670074",
    dirtyPink: "#E3DCDE",
pink: "#E35C85",

    grey: "#fafafb",
    greySubmenu: "#F6F6F6",

  },
  fontWeight: {
    extrathin: 200,
    thin: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  fontSize: {
    base: "16px",
    titleBig: "62px",
    titleMedium: "46px",
    titleSmall: "36px",
    titleSmaller: "30px",
    titleSuperSmall: "28px",
    paragraph: "18px",
  },


  media: {
    xxl: "@media (min-width: 1440px)",
    xl: "@media (min-width: 1200px)",
    lg: "@media (min-width: 992px)",
    md: "@media (min-width: 782px)",
    sm: "@media (min-width: 600px)",
    ssm:  "@media (min-width: 375px)",
  },

  boxShadow: {
    check: "0 0.0125rem 3.8875rem rgba(100, 100, 100, 0.43)",
  },
}

// //example usage

// ${({theme}) => theme.colors.white};
// ${({theme}) => theme.fontWeight.bold};
// ${({theme}) => theme.media.xl}

// ${({theme}) => theme.fontSize.titleBig}
// ${({theme}) => theme.lineHeight.titleMedium};

// RWD (media.lg):
// titleBig -> titleMedium
// titleMedium -> titleSmall
// titleSmall -> titleSuperSmall
