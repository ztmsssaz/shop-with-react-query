import {useTranslation} from 'react-i18next'
import ProductItems from '../../components/shop/productItems'

function Shop() {
  const {t} = useTranslation()
  return (
    <div>
      <h1 className='text-center text-xl text-slate-900 bg-slate-300 rounded-md font-bold py-4 m-1'>
        {t('shop')}
      </h1>
      <ProductItems />
    </div>
  )
}

export default Shop
