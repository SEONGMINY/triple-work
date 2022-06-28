import styled from 'styled-components'

import COLOR from '../style/common/color'
import { FONT_STYLES } from '../style/common/font-style'

const MetricsContainer = styled.div`
  width: 417px;
  display: flex;
  flex-direction: column;
  ${FONT_STYLES.title}
  color: ${COLOR.colorMain};

  & > div {
    margin-bottom: 20px;
  }
`

export default MetricsContainer
