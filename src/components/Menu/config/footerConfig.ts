import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Links'),
    items: [
      {
        label: t('About'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Browse'),
        href: 'https://docs.pancakeswap.finance/brand',
      },
      {
        label: t('Connect'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Our Logo'),
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
      },
      {
        label: t('Help Center'),
        href: 'https://docs.pancakeswap.finance/tokenomics/cake',
      },
    ],
  },
  {
    label: t('Site'),
    items: [
      {
        label: t('Sign in'),
        href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
      },
      {
        label: t('How it works'),
        href: 'https://docs.pancakeswap.finance/help/troubleshooting',
      },
      {
        label: t('Terms'),
        href: 'https://docs.pancakeswap.finance/get-started',
      },
      {
        label: t('Highest ranked'),
        href: 'https://docs.pancakeswap.finance/get-started',
      },
      {
        label: t('Most popular'),
        href: 'https://docs.pancakeswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Social'),
    items: [
      {
        label: 'Telegram',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Medium'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Twitter'),
        href: 'https://docs.pancakeswap.finance/code/bug-bounty',
      },
      {
        label: t('Lightpaper'),
        href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
    ],
  },
]
