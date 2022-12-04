import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  xxsm: '320px',
  xsm: '575px',
  sm: '650px',
  md: '768px',
  lg: '960px',
  xl: '1100px',
  xxl: '1350px',
  xxxl: '1536px',
}

const theme = extendTheme({
  fonts: {
    'header': 'DM Sans, sans-serif'
  },
  breakpoints
})

export default theme;