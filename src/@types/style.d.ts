import 'styled-components'
import { DefaultTheme } from '../styles/themes/default'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}

  title: String

  yellow: String

  green: String

  red: String

  colors: {

    gray1: String
    gray6: String
    gray5: String
    gray7: String
    gray8: String
    gray9: String

    green3: String

    green5: String
    green7: String

    red5: String
    red7: String

    yellow5: String
  }
}
