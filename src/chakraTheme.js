import { extendTheme } from "@chakra-ui/react"
import { theme as baseTheme } from "@chakra-ui/theme"

const fonts = {
  ...baseTheme.fonts,
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
}

export const theme = extendTheme({ fonts })
