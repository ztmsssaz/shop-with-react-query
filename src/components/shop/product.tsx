import AddToCartButton from './addToCart'
import {useTranslation} from 'react-i18next'

export type Product = {
  id: number
  title: string
  price: number
  image: string
  qty: number
  description: string
}

function SingleProduct({product}: {product: Product}) {
  const {t} = useTranslation()
  return (
    <div className='relative w-full xs:w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 flex flex-col justify-around my-1 cursor-pointer'>
      <div className='bg-slate-900 min-h-[400px] sm:min-h-[425px] hover:bg-slate-950 transition-[.4s] rounded m-1 p-3'>
        <div className='rounded-md overflow-hidden'>
          <img
            className='rounded-md transition-all hover:scale-125'
            src='/assets/images/macbook.jpg'
            alt='macbook'
          />
        </div>
        <div>
          <h2 className='font-bold text-lg my-2'>{product.title}</h2>
          <p className='py-1'>{product.description}</p>
          <h3 className='py-1'>{product.price + ' ' + t('currency')}</h3>
        </div>
        <div className='min-h-10'>
          <AddToCartButton
            className='absolute bottom-3 left-[50%] translate-x-[-50%]'
            item={product}
          />
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
