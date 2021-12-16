import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#FF173D",
        dark: "#AC0C3C"
      },
      text: {
        primary: "#1A202E",
        secondary: "#475569"
      },
      background: {
        default: "#FFFFFF"
      }
    },
    typography: {
      fontFamily: "Poppins",
      fontSize: 14,
      fontWeightBold: 500,
      h1: {
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 1.5
      },
      body1: {
        fontSize: 14,
        fontWeight: 400,
        color: "#475569"
      },
      body2: {
        color: "#97A6BA",
        fontSize: 14,
        fontWeight: 400
      },
      subtitle1: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "21px"
      },
      button: {
        borderRadius: 6,
        fontSize: 12,
        lineHeight: "18px",
        fontWeight: 400
      }
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 6,
          textTransform: "initial",
          height: "34px",
          "&:disabled": {
            background: "#E6EBEE"
          }
        },

        containedPrimary: {
          fontSize: 12,
          fontWeight: 500,
          lineHeight: "18px",
          padding: "8px 14px"
        }
      },
      MuiIconButton: {
        root: {},
        sizeSmall: {
          height: "37px",
          width: "37px",
          marginTop: "4px"
        }
      },
      MuiTextField: {
        root: {}
      },
      MuiInputBase: {
        root: {}
      }
    },
    props: {
      MuiButton: {
        disableElevation: true,
        color: "primary"
      },
      MuiTextField: {
        variant: "outlined",
        margin: "dense"
      }
    }
  })
);

export default theme;
