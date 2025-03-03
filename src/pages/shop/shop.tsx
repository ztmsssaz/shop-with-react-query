import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import ProductsContainer from '../../components/shop/productsContainter'
import ProductFilter from '../../components/shop/filter'

function Shop() {
  const {t} = useTranslation()
  const [toggle, setToggle] = useState(true)
  const [country, setCountry] = useState('all')

  return (
    <div className='relative min-h-screen'>
      <h1 className='text-center text-xl text-slate-900 bg-slate-300 rounded-md font-bold py-4 m-1'>
        {t('shop')}
      </h1>
      <div>
        <button
          onClick={() => setToggle(!toggle)}
          className='hidden p-2 bg-slate-50 text-slate-700 border border-slate-800 rounded-md'
        >
          Shop Toggle
        </button>
      </div>
      <ProductFilter onFilter={setCountry} />
      {toggle && <ProductsContainer filterValue={country} />}
    </div>
  )
}

export default Shop
