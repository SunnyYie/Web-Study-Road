import { extendTheme } from '@chakra-ui/react'

const themes = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        'font-family': "-apple-system,BlinkMacSystemFont,'Segoe UI'",
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      code: {
        'font-family': 'source-code-pro,Menlo,Monaco,Consolas,',
      },
    },
  },
}

const theme = extendTheme({ themes })

export default theme
