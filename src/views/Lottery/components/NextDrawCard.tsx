import { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Text,
  Skeleton,
  Button,
  useModal,
  Box,
  CardFooter,
  ExpandableLabel,
  useMatchBreakpoints,
} from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import ViewTicketsModal from './ViewTicketsModal'
import BuyTicketsButton from './BuyTicketsButton'
import { dateTimeOptions } from '../helpers'
import RewardBrackets from './RewardBrackets'

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-column-gap: 32px;
    grid-template-columns: auto 1fr;
  }
`

const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 10px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 520px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 870px;
  }
`

const NextDrawWrapper = styled.div`
  background: #171B22;
  padding: 24px;
`

const NextDrawCard = () => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
  const { account } = useWeb3React()
  const { currentLotteryId, isTransitioning, currentRound } = useLottery()
  const { endTime, amountCollectedInCake, userTickets, status } = currentRound

  const [onPresentViewTicketsModal] = useModal(<ViewTicketsModal roundId={currentLotteryId} roundStatus={status} />)
  const [isExpanded, setIsExpanded] = useState(false)
  const ticketBuyIsDisabled = status !== LotteryStatus.OPEN || isTransitioning

  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const endTimeMs = parseInt(endTime, 10) * 1000
  const endDate = new Date(endTimeMs)
  const isLotteryOpen = status === LotteryStatus.OPEN
  const userTicketCount = userTickets?.tickets?.length || 0
  const { isMobile, isMd } = useMatchBreakpoints();

  const getPrizeBalances = () => {
    if (status === LotteryStatus.CLOSE || status === LotteryStatus.CLAIMABLE) {
      return (
        <Heading scale="xl" color="secondary" textAlign={['center', null, null, 'left']}>
          {t('Calculating')}...
        </Heading>
      )
    }
    return (
      <>
        {prizeInBusd.isNaN() ? (
          <Skeleton my="7px" height={40} width={160} />
        ) : (
          <Balance
            fontSize="32px"
            color="#2AA3DF"
            textAlign={['center', null, null, 'left']}
            lineHeight="1"
            bold
            prefix="~$"
            value={getBalanceNumber(prizeInBusd)}
            decimals={0}
            fontWeight='500'
          />
        )}
        {prizeInBusd.isNaN() ? (
          <Skeleton my="2px" height={14} width={90} />
        ) : (
          <Balance
            marginTop="10px"
            fontSize="14px"
            color="textSubtle"
            textAlign={['center', null, null, 'left']}
            unit=" $SAFU"
            value={getBalanceNumber(amountCollectedInCake)}
            decimals={0}
          />
        )}
      </>
    )
  }

  const getNextDrawId = () => {
    if (status === LotteryStatus.OPEN) {
      return `${currentLotteryId} |`
    }
    if (status === LotteryStatus.PENDING) {
      return ''
    }
    return parseInt(currentLotteryId, 10) + 1
  }

  const getNextDrawDateTime = () => {
    if (status === LotteryStatus.OPEN) {
      return `${t('Draw')}: ${endDate.toLocaleString(locale, dateTimeOptions)}`
    }
    return ''
  }

  const ticketRoundText =
    userTicketCount > 1
      ? t('You have %amount% tickets this round', { amount: userTicketCount })
      : t('You have %amount% ticket this round', { amount: userTicketCount })
  const [youHaveText, ticketsThisRoundText] = ticketRoundText.split(userTicketCount.toString())

  return (
    <StyledCard>
      <CardHeader style={{ borderBottom: '1px solid #272E39' }} p="16px 24px">
        <Flex flexDirection="column" justifyContent="space-between">
          <Heading style={{ color: '#FFF', fontSize: '18px' }} mr="12px">{t('Next Draw')}</Heading>
          <Text style={{ marginTop: '10px', fontSize: '14px' }}>
            {currentLotteryId && `#${getNextDrawId()}`} {Boolean(endTime) && getNextDrawDateTime()}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Grid>
          <Flex flexDirection="column">
            <Flex justifyContent={['center', null, null, 'flex-start']}>
              <Heading style={{ fontSize: '18px', color: '#FFF' }}>{t('Prize Pot')}</Heading>
            </Flex>
            <Flex flexDirection="column" mb="18px" mt="15px" >
              {getPrizeBalances()}
            </Flex>
          </Flex>
          <Box style={{ marginLeft: '138px', flexDirection: 'column' }} display={['none', null, null, 'flex']}>

            {account ? (
              <>
                <Flex justifyContent={['center', null, null, 'flex-start']}>
                  <Text style={{ color: '#FFF', fontSize: '18px' }} display="inline">{youHaveText} </Text>
                  {!userTickets.isLoading ? (
                    <Balance fontSize="18px" fontWeight="500" value={userTicketCount} decimals={0} display="inline" bold mx="4px" />
                  ) : (
                    <Skeleton mx="4px" height={20} width={40} />
                  )}
                  <Text style={{ color: '#FFF', fontSize: '18px' }} display="inline"> {ticketsThisRoundText}</Text>
                </Flex>
              </>

            ) : (
              <Heading style={{ color: '#FFF', fontSize: '18px' }}>{t('Your tickets')}</Heading>
            )}
            {!userTickets.isLoading && userTicketCount > 0 && (
              <Button
                onClick={onPresentViewTicketsModal}
                height="auto"
                width="fit-content"
                p="0"
                mb={['32px', null, null, '0']}
                variant="text"
                scale="sm"
              >
                {t('View your tickets')}
              </Button>
            )}
            <BuyTicketsButton style={{
              fontSize: '16px',
              color: '#FFF',
              background: 'linear-gradient(180deg, #2ABEDF 0%, #2A88DF 100%)',
              marginTop: '15px',
              whiteSpace: 'nowrap'
            }}
              disabled={ticketBuyIsDisabled} maxWidth="124px" maxHeight="35px" />

          </Box>
          <Flex flexDirection={['column', null, null, 'row']} alignItems={['center', null, null, 'flex-start']}>
            {isLotteryOpen && (
              <Flex
                flexDirection="column"
                mr={[null, null, null, '24px']}
                alignItems={['center', null, null, 'flex-start']}
              >
                {/* {account && (
                  <Flex justifyContent={['center', null, null, 'flex-start']}>
                    <Text display="inline">{youHaveText} </Text>
                    {!userTickets.isLoading ? (
                      <Balance value={userTicketCount} decimals={0} display="inline" bold mx="4px" />
                    ) : (
                      <Skeleton mx="4px" height={20} width={40} />
                    )}
                    <Text display="inline"> {ticketsThisRoundText}</Text>
                  </Flex>
                )} */}
                {/* {!userTickets.isLoading && userTicketCount > 0 && (
                  <Button
                    onClick={onPresentViewTicketsModal}
                    height="auto"
                    width="fit-content"
                    p="0"
                    mb={['32px', null, null, '0']}
                    variant="text"
                    scale="sm"
                  >
                    {t('View your tickets')}
                  </Button>
                )} */}
              </Flex>
            )}
            {isMobile && (
              <BuyTicketsButton style={{
                fontSize: '16px',
                color: '#FFF',
                background: '#29B2DE',
                marginTop: '15px'
              }}
                disabled={ticketBuyIsDisabled} maxWidth="143px" maxHeight="35px" />
            )}
          </Flex>
        </Grid>
      </CardBody>
      <CardFooter p="0">
        {isExpanded && (
          <NextDrawWrapper>
            <RewardBrackets lotteryNodeData={currentRound} />
          </NextDrawWrapper>
        )}
        {(status === LotteryStatus.OPEN || status === LotteryStatus.CLOSE) && (
          <Flex style={{ borderTop: '1px solid #2C313D' }} p="8px 24px" alignItems="center" justifyContent="center">
            <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? t('Hide') : t('Details')}
            </ExpandableLabel>
          </Flex>
        )}
      </CardFooter>
    </StyledCard>
  )
}

export default NextDrawCard
