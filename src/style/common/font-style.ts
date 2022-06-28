import { css } from 'styled-components'

interface Font {
  size: number
  weight: 'R' | 'SB' | 'M' | 'B'
}

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'M':
      return 500
    case 'SB':
      return 600
    case 'B':
      return 700
    case 'R':
    default:
      return 400
  }
}

export const FONT = ({ size, weight }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
`

export const FONT_STYLES = {
  title: FONT({ size: 36, weight: 'R' }),
  small: FONT({ size: 15, weight: 'R' }),
  award: FONT({ size: 14, weight: 'B' }),
}
