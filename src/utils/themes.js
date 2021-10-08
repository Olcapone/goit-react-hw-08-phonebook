import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#1769aa",
      main: "#2196f3",
      dark: "#4dabf5",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ab003c",
      main: "#f50057",
      dark: "#f73378",
      contrastText: "#000",
    },
  },
});

export const componentTheme = createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.contrastText,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.contrastText,
        },
      },
    },
  },
});
