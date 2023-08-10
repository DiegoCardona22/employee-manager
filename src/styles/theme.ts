// @packages
import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme, Theme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    tree: {
      fill: string;
      stroke: string;
    };
  }
  interface PaletteOptions {
    tree: {
      fill: string;
      stroke: string;
    };
  }
}

export const palette = {
  alizarinCrimson: '#DA1E28',
  anakiwa: '#B2DEFF',
  antiFlashWhite: '#F2F2F2',
  aquamarine: '#87FDB9',
  arsenic: '#EBEBEB',
  azureRadiance: '#0085FF',
  azureishWhite: '#DCE1EB',
  baliHai: '#7F86AA',
  black: '#000000',
  blue: '#0000FF',
  blueAzure: '#00abec',
  blueChalk: '#ECE2FF',
  blueGradient: 'linear-gradient(96.24deg, #00D2FF -2.55%, #3A7BD5 103.91%)',
  blueRibbon: '#0062F5',
  blueStudio: '#06243F',
  blueStudioContrast: '#192833',
  blueStudioHover: '#1976d226',
  blueStudioSelected: '#1976d24d',
  brightGray: '#3F4252',
  brightSun: '#FFD540',
  buttonBlue: '#2196F3',
  carnation: '#FA4D56',
  carouselPink: '#FBE7EF',
  casper: '#A6B9CA',
  cerulean: '#00BEEA',
  chateauGreen: '#42BE65',
  chineseSilver: '#cacaca',
  citrineWhite: '#FAEADC',
  coconoutCream: '#F8F0DB',
  cornflowerBlue: '#1976d2',
  darkElectricBlue: '#566E85',
  darkGray: '#2c2c2c',
  darkLiver: '#515151',
  darkerBlue: '#111b22',
  davysGrey: '#5B5B5B',
  ebonyClay: '#282D40',
  electricViolet: '#5900FF',
  eucalyptus: '#24A148',
  flamenco: '#FE800C',
  gainsboro: '#D8DDEA',
  ghostWhite: '#F9F9F9',
  goldenrod: '#FFD567',
  gray: '#888484',
  hanBlue: '#3A7BD5',
  hawkesBlue: '#e2f1fd',
  heliotrope: '#A575FF',
  hotPink: '#FF6FAA',
  hummingBird: '#DFF6FB',
  jasmine: '#FDD687',
  java: '#17D1C4',
  lavender: '#E7EAF1',
  lightGray: '#839192',
  lighterGray: '#DDDDDD',
  orange: '#FFA500',
  oxfordBlue: '#354757',
  pewterBlue: '#93A9BE',
  raisinBlack: '#252526',
  rose: '#FD0069',
  sandyBrown: '#F29E50',
  shakespeare: '#46BCD8',
  silverFoil: '#AEAEAE',
  sonicSilver: '#757575',
  teaGreen: '#c9ffc1',
  tranquil: '#E2FEFC',
  turqoise: '#29CBC0',
  vividSkyBlue: '#00D2FF',
  white: '#ffffff',
  whiteLilac: '#F2F5FA',
  whiteSmoke: '#F8F8F8',
  yellowSea: '#F0AF03',
};

const lightSkin = {
  agGridTheme: 'ag-theme-alpine', // The theme of the ag-grid component
  backgroundMain: palette.white, // The main background color
  backgroundSecond: palette.white, // The secondary background color
  backgroundSidebar: palette.blueStudio, // The sidebar background color
  borderMain: palette.lightGray, // The main border color
  borderUnfocusedInput: palette.black, // The border color for unfocused inputs
  fieldDisabled: palette.lighterGray, // E.g: Disabled input background color
  isDark: false, // Whether the skin is dark or not
  listBackground: palette.white, // The background color for lists
  listHover: palette.lavender, // The background color for lists when hovering
  listSelected: palette.cerulean, // The background color for lists when selected
  oddRow: palette.whiteSmoke, // The background color for odd rows in tables
  primaryContrastText: palette.white, // The primary contrast text color
  primaryDark: palette.cerulean, // The primary dark color
  primaryLight: palette.hummingBird, // The primary light color
  primaryMain: palette.cerulean, // The primary main color
  radioColor: palette.buttonBlue, // The color of the selected radio button
  secondaryMain: palette.cerulean, // E.g: The highlighted tab indicator
  sumaryLabel: palette.blueRibbon, // E.g: The label color for the summary component
  textDisabled: palette.gray, // E.g: Disabled input text color
  textPrimary: palette.black, // E.g: Input text color
  textSecondary: palette.lightGray, // E.g: Placeholder text color
  treeCardBackground: palette.antiFlashWhite, // The background color for tree cards
  treeCardBorder: palette.silverFoil, // The border color for tree cards
};

const darkSkin = {
  agGridTheme: 'ag-theme-alpine-dark',
  backgroundMain: palette.blueStudio,
  backgroundSecond: palette.blueStudioContrast,
  backgroundSidebar: palette.blueStudio,
  borderMain: palette.gray,
  borderUnfocusedInput: palette.white,
  fieldDisabled: palette.darkGray,
  isDark: true,
  listBackground: palette.black,
  listHover: palette.blueStudioHover,
  listSelected: palette.blueStudioSelected,
  oddRow: palette.darkerBlue,
  primaryContrastText: palette.white,
  primaryDark: palette.cerulean,
  primaryLight: palette.hummingBird,
  primaryMain: palette.cerulean,
  radioColor: palette.buttonBlue,
  secondaryMain: palette.cerulean,
  sumaryLabel: palette.cerulean,
  textDisabled: palette.gray,
  textPrimary: palette.white,
  textSecondary: palette.lightGray,
  treeCardBackground: palette.darkLiver, // The background color for tree cards
  treeCardBorder: palette.silverFoil, // The border color for tree cards
};

export interface EmployeeManagementTheme extends Theme {
  colors: typeof palette,
  skin: typeof lightSkin
}

const createEmployeeManagementTheme = (colors: typeof palette, skin: typeof lightSkin) => createTheme({
  palette: {
    tree: {
      fill: skin.treeCardBackground,
      stroke: colors.darkerBlue,
    },
    common: {
      white: colors.white,
      black: colors.black,
    },
    primary: {
      contrastText: skin.primaryContrastText,
      dark: skin.primaryDark,
      light: skin.primaryLight,
      main: skin.primaryMain,
    },
    secondary: {
      contrastText: colors.darkElectricBlue,
      dark: colors.ebonyClay,
      light: colors.hummingBird,
      main: skin.secondaryMain,
    },
    error: {
      dark: colors.alizarinCrimson,
      main: colors.carnation,
    },
    warning: {
      contrastText: colors.white,
      light: colors.jasmine,
      main: colors.flamenco,
    },
    info: {
      main: colors.shakespeare,
      dark: colors.raisinBlack,
      contrastText: colors.ghostWhite,
    },
    success: {
      main: colors.eucalyptus,
      light: colors.aquamarine,
    },
    text: {
      primary: skin.textPrimary,
      secondary: skin.textSecondary,
      disabled: skin.textDisabled,
    },
    grey: {
      50: colors.arsenic,
      100: colors.ebonyClay,
      200: colors.sonicSilver,
      300: colors.chineseSilver,
      400: colors.davysGrey,
    },
  },
  typography: {
    h6: {
      fontFamily: 'Inter-Regular',
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '12.1px',
    },
    h5: {
      fontFamily: 'Inter-Regular',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '14.52px',
    },
    h4: {
      fontFamily: 'Inter-Regular',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '16.94px',
    },
    h3: {
      fontFamily: 'Inter-Regular',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '19.36px',
    },
    h2: {
      fontFamily: 'Inter-Light',
      fontSize: '24px',
      fontWeight: '300',
      lineHeight: '29.05px',
    },
    body2: {
      fontFamily: 'Inter-Light',
      fontSize: '12px',
      fontWeight: '300',
      lineHeight: '14.52px',
    },
    button: {
      fontFamily: 'Inter-Regular',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '17.1px',
      textTransform: 'none',
    },
    fontFamily: 'Inter-Medium',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(
            !skin.isDark ? {
              track: grey[200],
              thumb: grey[400],
              active: grey[500],
            } : undefined,
          ),
          scrollbarWidth: 'thin',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.MuiInputLabel-shrink': {
            fontSize: '21px',
            marginTop: '-2px !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 18px',
          width: '150px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: skin.textSecondary,
          '&.Mui-checked': {
            color: `${skin.primaryMain}`,
          },
          '&.Mui-focusVisible': {
            '&::before': {
              border: `2px solid ${skin.primaryMain}`,
              borderRadius: 4,
              height: 20,
              position: 'absolute',
              width: 20,
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: skin.listBackground,
          '.MuiAutocomplete-listbox': {
            '.MuiAutocomplete-option': {
              '&:hover': {
                color: skin.textPrimary,
                backgroundColor: skin.listHover,
              },
              '&[aria-selected="true"]': {
                color: colors.white,
                backgroundColor: skin.primaryMain,
              },
              '&[aria-selected="true"].Mui-focused': {
                backgroundColor: skin.primaryMain,
              },
            },
          },
        },
        root: {
          '&MuiAutocomplete-groupLabel': {
            color: skin.textPrimary,
            backgroundColor: skin.primaryMain,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&::before': {
            borderColor: `${skin.borderUnfocusedInput} !important`,
          },
          '&.Mui-disabled': {
            backgroundColor: skin.fieldDisabled,
            borderRadius: '4px',
            opacity: 0.7,
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: skin.backgroundMain,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '14px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          margin: '-4px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: `1px solid ${colors.azureishWhite}`,
          borderRadius: '4px',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        disableInteractive: true,
      },
    },
  },
}, {
  colors,
  skin,
});

export const lightTheme = createEmployeeManagementTheme(palette, lightSkin);
export const darkTheme = createEmployeeManagementTheme(palette, darkSkin);
