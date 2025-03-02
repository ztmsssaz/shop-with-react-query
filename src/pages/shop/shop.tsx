import {useTranslation} from 'react-i18next'
import ProductItems from '../../components/shop/productItems'
import {useState} from 'react'

function Shop() {
  const {t} = useTranslation()
  const [toggle, setToggle] = useState(true)

  return (
    <div className='relative min-h-screen'>
      <h1 className='text-center text-xl text-slate-900 bg-slate-300 rounded-md font-bold py-4 m-1'>
        {t('shop')}
      </h1>
      <div>
        <button
          onClick={() => setToggle(!toggle)}
          className='p-2 bg-slate-50 text-slate-700 border border-slate-800 rounded-md'
        >
          Shop Toggle
        </button>
      </div>
      {toggle && <ProductItems />}
    </div>
  )
}

export default Shop
