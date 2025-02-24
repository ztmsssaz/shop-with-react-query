import {ChangeEvent} from 'react'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

function Nav() {
  const {
    t,
    i18n: {changeLanguage, language},
  }: any = useTranslation()

  function handleChangeLanguage(e: ChangeEvent<HTMLSelectElement>) {
    const {value}: {value: string} = e.target
    changeLanguage(value)
    localStorage.setItem('lang', value)
  }

  return (
    <header>
      <nav className='flex flex-row justify-around bg-slate-800 text-slate-200 p-2'>
        <div>
          <select
            className='rounded-md bg-slate-700 p-1 mx-2'
            onChange={handleChangeLanguage}
            defaultValue={language}
          >
            <option value='en'>🇺🇸 - English</option>
            <option value='fa' className='font-vazirmatn p-2'>
              🇮🇷 - فارسی
            </option>
          </select>
        </div>

        <div className='flex flex-row justify-center'>
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
        </div>
      </nav>
    </header>
  )
}

export default Nav
