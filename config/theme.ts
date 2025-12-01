import { MD3LightTheme, MD3DarkTheme } from "react-native-paper"
import themeJson from "./material-theme.json"
import { ThemeProp } from "react-native-paper/lib/typescript/types"

const lightColors = themeJson.schemes.light
const darkColors = themeJson.schemes.dark

const fonts = {
  displayLarge: {
    fontFamily: "Inter",
    fontSize: 57,
    lineHeight: 64,
    fontWeight: "400",
  },
  displayMedium: {
    fontFamily: "Inter",
    fontSize: 45,
    lineHeight: 52,
    fontWeight: "400",
  },
  displaySmall: {
    fontFamily: "Inter",
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "400",
  },

  headlineLarge: {
    fontFamily: "Inter",
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "400",
  },
  headlineMedium: {
    fontFamily: "Inter",
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "400",
  },
  headlineSmall: {
    fontFamily: "Inter",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "400",
  },

  titleLarge: {
    fontFamily: "Inter",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "400",
  },
  titleMedium: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  titleSmall: {
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },

  bodyLarge: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  bodyMedium: {
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
  bodySmall: {
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
  },

  labelLarge: {
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  labelMedium: {
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
  },
  labelSmall: {
    fontFamily: "Inter",
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "500",
  },
} as const

type FontKey = keyof typeof fonts
type FontEntry = {
  fontFamily: string
  fontSize: number
  lineHeight: number
  fontWeight: string
}

function buildFonts(): Record<FontKey, FontEntry> {
  const res = {} as Record<FontKey, FontEntry>

  ;(Object.keys(fonts) as Array<FontKey>).forEach((key) => {
    res[key] = {
      ...fonts[key],
    }
  })

  return res
}

export const lightTheme: ThemeProp = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...lightColors,
  },
  fonts: buildFonts() as object,
}

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...darkColors,
  },
  fonts: buildFonts() as object,
}
