import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "gray",
          color: "red",
        },
      },
    },
  },
  typography: {
    fontWeight: {
      light: 300,
      medium: 500,
      bold: 700,
    },
  },
  palette: {
    primary: {
      light: "#70d8bd",
      main: "#000000",
      dark: "#6c74fa",
    },
  },
});

export default theme;
