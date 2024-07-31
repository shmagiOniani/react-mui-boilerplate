import { alpha, Theme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

// ----------------------------------------------------------------------

// interface ThemeChangeLater extends Theme {
//   customShadows: {
//     card: any;
//   };
//   palette: {
//     input: {
//       focusedBorder: any;
//     };
//     background: { neutral: any };
//   };
// }



export function overrides(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          maxWidth: "100%",
          display: "inline-block",
          verticalAlign: "bottom",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.8),
        },
        invisible: {
          background: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedInherit: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.grey[800],
          "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[800],
          },
        },
        sizeLarge: {
          minHeight: 48,
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        containedInherit: {
          backgroundColor: theme.palette.grey[600],
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[600],
          [`&.${outlinedInputClasses.focused} `]: {
            color: alpha(theme.palette.grey[600], 0.9),
            // fontSize: '12px',
            // transform: 'scale(.9)'
          },
          // top: '15px',
          // left: '57px',
          // fontSize: '14px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // boxShadow: theme.customShadows.card,
          boxShadow: theme.shadows[12],
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: { variant: "body2" },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
        
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: alpha(theme.palette.grey[500], 0.24),
          },
          [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
            {
              // borderColor: alpha(theme.palette., 0.9),
              // borderColor: alpha(theme.palette.input.focusedBorder, 0.9),
            },
        
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.default,
          // backgroundColor: theme.palette.background.neutral,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
        },
      },
    },
  };
}
