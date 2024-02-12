"use client";
import { Theme, createTheme } from "@mui/material/styles";
import {
  amber,
  common,
  deepOrange,
  green,
  grey,
  purple,
  red,
} from "@mui/material/colors";
import { PaletteMode, ThemeOptions } from "@mui/material";
import "@fontsource/libre-baskerville";

const styleOverrides = (themeParam: Omit<Theme, "components">) => {
  return `
    hh1, hh2, hh3, hh4, hh5, hh6 {
      color: ${themeParam.palette.primary.main};
    }
    hh1 {
      font-size: 89px;
    }
    hh2 {
      font-size: 67px;
    }
    hh3 {
      font-size: 50px;
    }
    hh4 {
      font-size: 38px;
    }
    hh5 {
      font-size: 28px;
    }
    hh6 {
      font-size: 21px;
    }`;
};

const theme = createTheme({
  typography: {
    fontFamily: "Libre Baskerville",
    h1: {
      fontSize: 60,
      fontWeight: 700,
      marginBottom: 16,
    },
    h2: {
      fontSize: 67,
    },
    h3: {
      fontSize: 50,
    },
    h4: {
      fontSize: 38,
    },
    h5: {
      fontSize: 28,
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  palette: {
    // primary: { main: purple[500] },
    // secondary: { main: green[500] },
    // text: { primary: "#1A1A1A" },
  },
  components: {
    MuiCssBaseline: {
      // styleOverrides: (themeParam) => styleOverrides(themeParam),
    },
  },
});

interface IThemeColors {
  DARK: string;
  LIGHT: string;
}

export type TThemeMode = "DARK" | "LIGHT";

interface IThemeProps {
  PRIMARY: IThemeColors;
  SECONDARY: IThemeColors;
  TEXT: IThemeColors;
  SUBTITLE: IThemeColors;
  BODY: IThemeColors;
  TEXT_ACCENT: IThemeColors;
  MENU_BUTTON_BACKGROUND: IThemeColors;
  MENU_BUTTON_BACKGROUND_HOVER: IThemeColors;
  MENU_BUTTON_BACKGROUND_BORDER: IThemeColors;
}

export const THEME: IThemeProps = {
  PRIMARY: {
    DARK: "#4ECCA3",
    LIGHT: "#e89a00",
  },
  SECONDARY: {
    DARK: "#4ECCA3",
    LIGHT: "#e89a00",
  },
  TEXT: {
    DARK: "#4ECCA3",
    LIGHT: "#171717",
  },
  SUBTITLE: {
    DARK: grey[300],
    LIGHT: grey[700],
  },
  BODY: {
    DARK: grey[200],
    LIGHT: grey[700],
  },
  TEXT_ACCENT: {
    DARK: "#e89a00",
    LIGHT: "#e89a00",
  },
  MENU_BUTTON_BACKGROUND: {
    DARK: '#121212',
    LIGHT: "#e89a00",
  },
  MENU_BUTTON_BACKGROUND_HOVER: {
    DARK: grey[800],
    LIGHT: grey[200],
  },
  MENU_BUTTON_BACKGROUND_BORDER: {
    DARK: "#9e9e9e",
    LIGHT: "#9e9e9e",
  },
};

export const getThemeOptions = (mode: PaletteMode) => {
  const themeMode: TThemeMode = mode.toUpperCase() as TThemeMode;
  const themeOptions: ThemeOptions = {
    typography: theme.typography,
    palette: {
      // ...theme.palette,
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: { main: THEME.PRIMARY.LIGHT },
            secondary: { main: green[500] },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            info: {
              main: THEME.TEXT_ACCENT.LIGHT,
            },
          }
        : {
            // palette values for dark mode
            primary: { main: THEME.PRIMARY.DARK },
            secondary: { main: grey[800] },
            info: {
              main: THEME.TEXT_ACCENT.DARK,
            },
          }),
    },
    components: {
      ...theme.components,
      MuiTypography: {
        styleOverrides: {
          root: {
            color: THEME.TEXT[themeMode],
          },
          subtitle1: {
            color: THEME.SUBTITLE[themeMode],
          },
          body1: {
            color: THEME.BODY[themeMode],
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: 16
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            border: "1px solid transparent",
            backgroundColor: THEME.MENU_BUTTON_BACKGROUND[themeMode],
            "&:hover": {
              backgroundColor: THEME.MENU_BUTTON_BACKGROUND_HOVER[themeMode],
              borderColor: THEME.MENU_BUTTON_BACKGROUND_BORDER[themeMode],
            },
          },
        },
      },
    },
  };

  return themeOptions;
};

export const defaultTheme = createTheme(getThemeOptions("light"));

export default theme;
