import styled from 'styled-components'

import COLOR from '../style/common/color'
import { FONT_STYLES } from '../style/common/font-style'

interface AwardItemProps {
  imgSrc: string
  appStore: string
  award: string
}

const AwardItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 39px;
  ${FONT_STYLES.award}
  line-height: 22px;
  color: ${COLOR.gray2};

  img {
    width: 54px;
    height: 54px;
    margin-right: 8px;
  }
`

const AwardItem = ({ imgSrc, appStore, award }: AwardItemProps) => {
  return (
    <AwardItemContainer>
      <img src={imgSrc} alt={appStore} />
      <p>
        {appStore}
        <br />
        {award}
      </p>
    </AwardItemContainer>
  )
}

export default AwardItem
