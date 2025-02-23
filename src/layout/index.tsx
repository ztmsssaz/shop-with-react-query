import {ReactNode} from 'react'
import Nav from '../components/nav'
import {useTranslation} from 'react-i18next'

function Layout({children}: {children: ReactNode}) {
  const {
    i18n: {dir, lang},
  }: any = useTranslation()

  return (
    <div dir={dir()}>
      <Nav />
      {lang}
      {children}
    </div>
  )
}

export default Layout
