import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

function Nav() {
  const {t}: any = useTranslation()

  return (
    <nav className='flex flex-row justify-center bg-slate-800 text-slate-200 p-2'>
      <div className='p-2 hover:font-bold mx-1 hover:text-slate-50'>
        <Link to='/shop'>{t('shop')}</Link>
      </div>
      <div className='p-2 hover:font-bold mx-1 hover:text-slate-50'>
        <Link to='/cart'>{t('cart')}</Link>
      </div>
      <div className='p-2 hover:font-bold mx-1 hover:text-slate-50'>
        <Link to='/aboutus'>{t('about_us')}</Link>
      </div>
      <div className='p-2 hover:font-bold mx-1 hover:text-slate-50'>
        <Link to='/login'>{t('login')}</Link>
      </div>
    </nav>
  )
}

export default Nav
