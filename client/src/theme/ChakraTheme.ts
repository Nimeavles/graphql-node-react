import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  xsm: '320px',
  sm: '620px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({
  fonts: {
    'header': 'DM Sans, sans-serif'
  },
  breakpoints
})

export default theme;