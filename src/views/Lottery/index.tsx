import { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Skeleton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useFetchLottery, useLottery } from 'state/lottery/hooks'
import {
  TITLE_BG,
  GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  CHECK_PRIZES_BG,
} from './pageSectionStyles'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'
import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'
import { PageMeta } from '../../components/Layout/Page'
import BilliardBackGround from './components/BilliardBackground'

const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
`

const Lottery = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const {
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()
  const { isMobile, isMd } = useMatchBreakpoints();

  return (
    <>
      {/* Title pages */}
      <PageMeta />

      <LotteryPage>
        {/* Prizes tickets */}
        <BilliardBackGround />
        <PageSection style={{ height: isMobile ? '440px' : '731px' }} index={1} hasCurvedDivider={false}>
          <Hero />
        </PageSection>

        {/* Tickets now */}
        <PageSection
          containerProps={{ style: { marginTop: '0px' } }}
          style={{ borderRadius: '7px' }}
          innerProps={{ style: { paddingTop: '0px' } }}
          background={GET_TICKETS_BG}
          concaveDivider
          clipFill={{ light: '#7645D9' }}
          dividerPosition="top"
          index={2}
        >
          <Flex style={{
            borderRadius: '7px',
            flexDirection: isMobile ? "column" : "row"
          }} alignItems="center" justifyContent="center" pt="24px">
            {status === LotteryStatus.OPEN && (
              <Heading scale="xl" color="#ffffff" mb="24px" textAlign="center">
                {t('Get your tickets now!')}
              </Heading>
            )}
            <Flex style={{
              marginLeft: isMobile ? "0" : "110px"
            }} alignItems="center" justifyContent="center" mb="30px" >
              {nextEventTime && (postCountdownText || preCountdownText) ? (
                <Countdown
                  nextEventTime={nextEventTime}
                  postCountdownText={postCountdownText}
                  preCountdownText={preCountdownText}
                />
              ) : (
                <Skeleton height="41px" width="250px" />
              )}
            </Flex>
          </Flex>
          <NextDrawCard />
        </PageSection>

        {/* Connect wallet */}
        <PageSection style={{ margin: 'auto', borderRadius: '7px' }} background="#1F242C" hasCurvedDivider={false} index={2}>
          <CheckPrizesSection />
        </PageSection>

        {/* History */}
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          hasCurvedDivider={false}
          index={2}
        >
          <div style={{
            position: 'absolute',
            bottom: '-27%'
          }}>
            <img src='images/decorations/blur.png' />
          </div>
          <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
            <div style={{ display: isMobile ? '' : 'flex' }}>
              <Heading style={{ fontSize: '30px' }} color="rgba(255, 255, 255, 0.87)" mb="24px" scale="xl" >
                {t('Finished Rounds')}
              </Heading>
              <Box style={{
                marginLeft: isMobile ? "0" : "378px",
              }} mb="24px" >
                <HistoryTabMenu
                  activeIndex={historyTabMenuIndex}
                  setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
                />
              </Box>
            </div>
            {historyTabMenuIndex === 0 ? (
              <AllHistoryCard />
            ) : (
              <YourHistoryCard
                handleShowMoreClick={handleShowMoreUserRounds}
                numUserRoundsRequested={numUserRoundsRequested}
              />
            )}
          </Flex>
        </PageSection>

        {/* How to play */}
        <PageSection
          dividerPosition="top"
          dividerFill={{ light: theme.colors.background }}
          clipFill={{ light: '#9A9FD0', dark: '#66578D' }}
          index={2}
        >
          <div style={{ position: 'absolute', bottom: '94.5%' }}>
            <img src='images/decorations/path.png' />
          </div>
          <div style={{ position: 'absolute', bottom: '91%' }}>
            <img src='images/decorations/path2.png' />
          </div>
          <HowToPlay />
          <div style={{ position: 'absolute', bottom: '72%' }}>
            <img src='images/decorations/path3.png' />
          </div>
          <div style={{ position: 'absolute', bottom: '69%' }}>
            <img src='images/decorations/path4.png' />
          </div>
        </PageSection>
      </LotteryPage>
    </>
  )
}

export default Lottery
