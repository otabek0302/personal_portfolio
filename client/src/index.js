import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#15161A",
      secondary: "#181b21",
    },
    white: {
      white10: "#FFFFFF1A",
      white20: "#FFFFFF33",
      white30: "#FFFFFF90",
      white100: "#FFFFFF",
    },
    black: {
      black10: "#00000060",
    },
    gray: {
      grey100: "#15161A",
      grey200: "#3F424D",
      grey400: "#656A7B",
      grey600: "#9196A5",
      grey700: "#AAAEB9",
      grey800: "#BFC2CB",
      grey900: "#D7D8DE",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 479.98,
      md: 779.98,
      lg: 999.98,
      xl: 1199.98,
      xxl: 1289.98,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h2" },
          style: {
            fontSize: "48px",
            lineHeight: "56px",
            fontWeight: "600",
            maxWidth: "900px",
            textAlign: "center",
            padding: "12px 0",
            "@media (max-width:999.98px)": {
              fontSize: "40px",
              lineHeight: "48px",
              maxWidth: "100%",
            },
            "@media (max-width:779.98px)": {
              fontSize: "32px",
              lineHeight: "38px",
              maxWidth: "100%",
            },
            "@media (max-width:479.98px)": {
              fontSize: "24px",
              lineHeight: "32px",
              maxWidth: "100%",
              padding: "6px 0",
            },
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: "32px",
            lineHeight: "44px",
            fontWeight: "400",
            maxWidth: "700px",
            textAlign: "center",
            "@media (max-width:999.98px)": {
              fontSize: "28px",
              lineHeight: "34px",
              maxWidth: "100%",
            },
            "@media (max-width:779.98px)": {
              fontSize: "26px",
              lineHeight: "32px",
              maxWidth: "100%",
            },
            "@media (max-width:479.98px)": {
              fontSize: "20px",
              lineHeight: "26px",
              maxWidth: "100%",
            },
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "400",
            maxWidth: "700px",
            textAlign: "center",
            "@media (max-width:999.98px)": {
              fontSize: "18px",
              lineHeight: "24px",
              maxWidth: "100%",
            },
            "@media (max-width:779.98px)": {
              fontSize: "16px",
              lineHeight: "20px",
              maxWidth: "100%",
            },
            "@media (max-width:479.98px)": {
              fontSize: "14px",
              lineHeight: "18px",
              maxWidth: "100%",
            },
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontSize: "18px",
            lineHeight: "24px",
            fontWeight: "400",
            maxWidth: "700px",
            textAlign: "center",
            "@media (max-width:479.98px)": {
              fontSize: "16px",
              lineHeight: "20px",
              maxWidth: "100%",
            },
          },
        },
        {
          props: { variant: "p" },
          style: {
            display: "block",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "400",
            maxWidth: "800px",
            "@media (max-width:779.98px)": {
              fontSize: "14px",
              lineHeight: "20px",
            },
            "@media (max-width:479.98px)": {
              fontSize: "12px",
              lineHeight: "18px",
            },
          },
        },
        {
          props: { variant: "span" },
          style: {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            "@media (max-width:479.98px)": {
              fontSize: "10px",
              lineHeight: "14px",
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "main" },
          style: {
            fontSize: "18px",
            lineHeight: "24px",
            fontWeight: "600",
            textAlign: "center",
            backgroundColor: "#FFFFFF1A",
            borderRadius: "24px",
            color: "#FFFFFF80",
            padding: "20px 62px",
            textTransform: "uppercase",
            "&:hover": {
              color: "#FFFF",
              backgroundColor: "#15161A",
            },
            "@media (max-width:779.98px)": {
              fontSize: "12px",
              lineHeight: "20px",
              fontWeight: "600",
              padding: "12px 22px",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            background: "rgba(255, 255, 255, 0.12)",
            color: "#FFFFFF80",
            "&:hover": {
              color: "#FFFF",
              backgroundColor: "#15161A",
              boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "rgba(255, 255, 255, 0.12)",
            color: "#FFFFFF80",
            "&:hover": {
              color: "#FFFF",
              borderColor: "#FFFF",
              boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            },
          },
        },
      ],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
