import styled from 'styled-components'

import logo from '../assets/images/triple_logo.png'
import COLOR from '../style/common/color'
import { FONT_STYLES } from '../style/common/font-style'

const LogoImage = styled.div`
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoContent = styled.div`
  padding-top: 230px;
  ${FONT_STYLES.small}
  color: ${COLOR.gray1};
`

const LogoContainer = () => {
  return (
    <LogoImage>
      <LogoContent>2021년 12월 기준</LogoContent>
    </LogoImage>
  )
}

export default LogoContainer
