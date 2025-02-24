import {ReactNode} from 'react'
import Nav from '../components/ui/nav'
import {useTranslation} from 'react-i18next'

function Layout({children}: {children: ReactNode}) {
  const {
    i18n: {dir, language},
  }: any = useTranslation()
  return (
    <div className={language === 'fa' ? 'font-vazirmatn' : 'font-roboto'} dir={dir()}>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
