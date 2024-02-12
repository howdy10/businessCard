import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    userDetails: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    userDetails?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    userDetails: true;
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: "#C8E6C9",
    },
    primary: {
      main: "#2E7D32",
      light: "#C8E6C9",
    },
  },
  typography: {
    userDetails: {
      color: "white",
    },
  },
});
