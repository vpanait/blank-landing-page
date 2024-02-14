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

const theme = createTheme({
  typography: {
    fontFamily: "Libre Baskerville",
    h1: {
      fontSize: 50,
      fontWeight: 700,
    },
    h2: {
      fontSize: 67,
    },
    h3: {
      fontSize: 28.5,
      fontWeight: 700,
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
      fontSize: 21,
      fontWeight: 700,
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
  BACKGROUND: IThemeColors;
  TEXT_ACCENT: IThemeColors;
  MENU_BUTTON_BACKGROUND: IThemeColors;
  MENU_BUTTON_BACKGROUND_HOVER: IThemeColors;
  MENU_BUTTON_BACKGROUND_BORDER: IThemeColors;
  BUTTON_TEXT: IThemeColors;
  BUTTON_BG: IThemeColors;
}

export const THEME: IThemeProps = {
  PRIMARY: {
    DARK: "#E6E6E6",
    LIGHT: "#e89a00",
  },
  SECONDARY: {
    DARK: "red",
    LIGHT: "#e89a00",
  },
  TEXT: {
    DARK: "#E6E6E6",
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
  BACKGROUND: {
    DARK: "#1E1E1E",
    LIGHT: "#e89a00",
  },
  BUTTON_TEXT: {
    DARK: "#1E1E1E",
    LIGHT: "#e89a00",
  },
  BUTTON_BG: {
    DARK: "#1E1E1E",
    LIGHT: "#e89a00",
  },
  MENU_BUTTON_BACKGROUND: {
    DARK: "#121212",
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
            background: {
              default: THEME.BACKGROUND.LIGHT,
            },
          }
        : {
            // palette values for dark mode
            primary: { main: THEME.PRIMARY.DARK },
            secondary: { main: grey[800] },
            background: {
              default: THEME.BACKGROUND.DARK,
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
            fontSize: 16,
            borderRadius: 22,
            minWidth: 200,
          },
          contained: {
            backgroundColor: THEME.PRIMARY[themeMode],
            color: "#1A1A1A",
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

export const defaultTheme = createTheme(getThemeOptions("dark"));

export default theme;
