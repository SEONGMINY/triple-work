import SectionContainer from '../../components/SectionContainer'
import ResponsiveSection from '../../components/ResponsiveSection'
import ContentContainer from '../../components/ContentContainer'
import LogoContainer from '../../components/LogoContainer'
import MetricsContainer from '../../components/MetricsContainer'
import MetricItem from '../../components/MetricItem'
import AwardsContainer from '../../components/AwardsContainer'
import AwardItem from '../../components/AwardItem'
import play_store from '../../assets/images/play_store.png'
import apple_badge from '../../assets/images/apple_badge.png'

const HomePage = () => {
  return (
    <SectionContainer>
      <ResponsiveSection>
        <LogoContainer />
        <ContentContainer>
          <MetricsContainer>
            <MetricItem max={700} point="만 명" nomal="의 여행자" />
            <MetricItem max={100} point="만 개" nomal="의 여행 리뷰" />
            <MetricItem max={470} point="만 개" nomal="의 여행 일정" />
          </MetricsContainer>
          <AwardsContainer>
            <AwardItem
              imgSrc={play_store}
              appStore="2018 구글 플레이스토어"
              award="올해의 앱 최우수상 수상"
            />
            <AwardItem
              imgSrc={apple_badge}
              appStore="2018 애플 앱스토어"
              award="오늘의 여행앱 선정"
            />
          </AwardsContainer>
        </ContentContainer>
      </ResponsiveSection>
    </SectionContainer>
  )
}

export default HomePage
