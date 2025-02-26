import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Bag, Earth} from '../icons/icons'
import {useSelector} from 'react-redux'
import {cartState} from '../../store/cart-slice'
import Badge from './badge'

function Nav() {
  const {
    t,
    i18n: {changeLanguage, language},
  }: any = useTranslation()
  const cart: cartState = useSelector((state: {cart: cartState}) => state.cart)

  function handleChangeLanguage() {
    if (language === 'fa') {
      changeLanguage('en')
      localStorage.setItem('lang', 'en')
    } else {
      changeLanguage('fa')
      localStorage.setItem('lang', 'fa')
    }
  }

  return (
    <header>
      <nav className='flex flex-row justify-around bg-slate-800 text-slate-200 p-2'>
        <div className='flex flex-row justify-center'>
          <div className='p-2 hover:font-bold mx-1 hover:text-slate-50'>
            <Link to='/shop'>{t('shop')}</Link>
          </div>
          <div className='p-2 hover:font-bold mx-1 hover:text-slate-50'>
            <Link to='/aboutus'>{t('about_us')}</Link>
          </div>
          <div className='p-2 hover:font-bold mx-1 hover:text-slate-50'>
            <Link to='/login'>{t('login')}</Link>
          </div>
        </div>

        <div className={`flex items-center ${language === 'en' && 'flex-row-reverse'}`}>
          <div className='relative cursor-pointer' onClick={handleChangeLanguage}>
            <Earth color='#e2e8f0' />
            <span
              className={`absolute bottom-[-12px] text-[10px] ${
                language === 'fa' ? ' left-0' : 'right-0'
              }`}
            >
              {language === 'fa' ? 'فا' : 'En'}
            </span>
          </div>
          <Link to='/cart' className='relative'>
            <Badge
              value={cart.items.reduce((acc, item) => {
                acc = acc + item.quantity
                return acc
              }, 0)}
              className='rounded-full top-[-5px] left-[-5px] text-red-400'
            />
            <Bag color='#e2e8f0' size={25} className='mx-2 z-1' />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
