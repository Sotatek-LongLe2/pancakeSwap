import styled, { keyframes, useTheme } from 'styled-components'
import Image from 'next/image'
import { Box, Flex, Heading, Skeleton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import { TicketPurchaseCard } from '../svgs'
import BuyTicketsButton from './BuyTicketsButton'
import prize from '../../../../public/images/prize-lotte.svg'

const mainTicketAnimation = keyframes`

`

const TicketContainer = styled(Flex)`
  animation: ${mainTicketAnimation} 3s ease-in-out infinite;
`

const PrizeTotalBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledBuyTicketButton = styled(BuyTicketsButton) <{ disabled: boolean }>`
  white-space: nowrap;
  font-weight: 500;
  ${({ theme, disabled }) => disabled && `background: ${theme.colors.disabled}`};
  ${({ theme }) => theme.mediaQueries.xs} {
  }
`

const ButtonWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  // left: 50%;
`

const TicketSvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-4deg);
`

const Decorations = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(/images/decorations/bg2-lotte.png);
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 100% 100%;
`
const StyleCurve = styled.div`
  position: absolute;
  z-index: 3;
  bottom: -73px;
  max-width: ${({ theme }) => `${theme.layoutWidth}px`};
`
const Hero = () => {
  const { t } = useTranslation()
  const theme = useTheme();
  const {
    currentRound: { amountCollectedInCake, status },
    isTransitioning,
  } = useLottery()

  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const prizeTotal = getBalanceNumber(prizeInBusd)
  const ticketBuyIsDisabled = status !== LotteryStatus.OPEN || isTransitioning
  const { isMobile, isMd } = useMatchBreakpoints()

  const getHeroHeading = () => {
    if (status === LotteryStatus.OPEN) {
      return (
        <>
          {prizeInBusd.isNaN() ? (
            <Skeleton my="7px" height={60} width={190} />
          ) : (
            <>
              {isMobile ? (
                <PrizeTotalBalance fontSize="64px" bold prefix="$" value={prizeTotal} mb="8px" decimals={0} />
              ) : (
                <PrizeTotalBalance fontSize="80px" bold prefix="$" value={prizeTotal} mb="8px" decimals={0} />
              )}
            </>
          )}
          {/* <Heading mb="32px" scale="lg" color="#424959">
            {t('In prizes!')}
          </Heading> */}
          <Image src={prize} />
          <div style={{ marginBottom: '32px' }} />
        </>
      )
    }
    return (
      <Heading mb="24px" scale="xl" color="#ffffff">
        {t('Tickets on sale soon')}
      </Heading>
    )
  }

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Decorations />

      <Heading mb="8px" scale="md" color="#2A88DF" id="lottery-hero-title">
        {t('CEEZEE Lottery')}
      </Heading>

      {getHeroHeading()}
      <TicketContainer position="relative" alignItems="center" justifyContent="center">
        <ButtonWrapper>
          <StyledBuyTicketButton variant="yellow" disabled={ticketBuyIsDisabled} />
        </ButtonWrapper>
      </TicketContainer>
      <div style={{ position: 'absolute', bottom: '-260px ' }}>
        <img src="/images/lottery/rotation.png" alt="" />
      </div>
      <div style={{
        position: 'absolute', zIndex: '3', bottom: '-73px',
        width: '1440px'
      }}>
        <img src='/images/lottery/curve.svg' />
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: '4',
          bottom: '39px',
          maxWidth: `${theme.layoutWidth}px`,
          // top: '542px'
        }}
      >
        <img src="/images/lottery/line1.png" alt="" />
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: '3',
          bottom: 0,
          maxWidth: `${theme.layoutWidth}px`,
          // top: '589px'
        }}
      >
        <img src="/images/lottery/line2.png" alt="" />
      </div>
    </Flex>
  )
}

export default Hero
