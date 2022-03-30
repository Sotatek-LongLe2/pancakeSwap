import styled from 'styled-components'
import { Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

export interface TimerProps {
  seconds?: number
  minutes?: number
  hours?: number
  days?: number
  wrapperClassName?: string
}

const StyledTimerFlex = styled(Flex) <{ showTooltip?: boolean }>`
  ${({ theme, showTooltip }) => (showTooltip ? ` border-bottom: 1px dashed ${theme.colors.textSubtle};` : ``)}
  div:last-of-type {
    margin-right: 0;
  }
`

const StyledTimerText = styled(Heading)`
  background: ${'#FFF'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Wrapper: React.FC<TimerProps> = ({ minutes, hours, days, seconds, wrapperClassName }) => {
  const { t } = useTranslation()

  return (
    <StyledTimerFlex alignItems="flex-end" className={wrapperClassName}>
      {Boolean(days) && (
        <>
          <div style={{ position: 'relative' }}>
            <img src='/images/decorations/day-time.png' />
          </div>
          <StyledTimerText
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'baseline',
              fontSize: '32px',
              marginLeft: '25px',
              marginBottom: '10px'
            }}
            mb="-4px" scale="xl" mr="4px">
            {days}
            <StyledTimerText style={{ fontSize: '14px' }} mr="12px">{t('D')}</StyledTimerText>
          </StyledTimerText>
        </>
      )}
      <div style={{ margin: '0px 3px 20px', color: '#919AAE' }}>:</div>
      {Boolean(hours) && (
        <>
          <div style={{ position: 'relative' }}>
            <img src='/images/decorations/day-time.png' />
          </div>
          <StyledTimerText
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'baseline',
              fontSize: '32px',
              marginLeft: '101px',
              marginBottom: '10px'
            }} mb="-4px" scale="xl" mr="4px">
            {hours}
            <StyledTimerText style={{ fontSize: '14px' }} mr="12px">{t('H')}</StyledTimerText>
          </StyledTimerText>
        </>
      )}
      <div style={{ margin: '0px 3px 20px', color: '#919AAE' }}>:</div>
      {Boolean(minutes) && (
        <>
          <div style={{ position: 'relative' }}>
            <img src='/images/decorations/day-time.png' />
          </div>
          <StyledTimerText
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'baseline',
              fontSize: '32px',
              marginLeft: '171px',
              marginBottom: '10px'
            }}
            mb="-4px" scale="xl" mr="4px">
            {minutes}
            <StyledTimerText style={{ fontSize: '14px' }} mr="12px">{t('M')}</StyledTimerText>
          </StyledTimerText>
        </>
      )}
      {Boolean(seconds) && (
        <>
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {seconds}
          </StyledTimerText>
          <StyledTimerText mr="12px">{t('s')}</StyledTimerText>
        </>
      )}
    </StyledTimerFlex>
  )
}

export default Wrapper
