import {ReactNode} from 'react'
import Nav from '../components/ui/nav'
import {useTranslation} from 'react-i18next'
import {ToastContainer} from 'react-toastify'

function Layout({children}: {children: ReactNode}) {
  const {
    i18n: {dir, language},
  }: any = useTranslation()
  return (
    <div
      className={`${
        language === 'fa' ? 'font-vazirmatn' : 'font-roboto'
      } bg-slate-500 min-h-screen`}
      dir={dir()}
    >
      <ToastContainer autoClose={1500} theme='dark' className='text-sm [&>*]:font-vazirmatn' />
      <Nav />
      <div className='container mx-auto text-slate-50 p-4'>{children}</div>
    </div>
  )
}

export default Layout
