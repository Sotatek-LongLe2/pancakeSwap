import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const HistoryTabMenu = ({ setActiveIndex, activeIndex }) => {
  const { t } = useTranslation()

  return (
    <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="subtle">
      <ButtonMenuItem style={{
        color: 'rgba(255, 255, 255, 0.87)s',
        zIndex: '2'
      }}>{t('All History')}</ButtonMenuItem>
      <ButtonMenuItem
        style={{
          color: 'rgba(255, 255, 255, 0.87)s',
          zIndex: '2'
        }}
      >{t('Your History')}</ButtonMenuItem>
    </ButtonMenu>
  )
}

export default HistoryTabMenu
