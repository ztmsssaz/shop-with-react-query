import {type Product} from './product'
import {useTranslation} from 'react-i18next'
import {addToCart, CartItem} from '../../store/cart-slice'
import {useCartDispatch} from '../../store/hooks'
import {toast} from 'react-toastify'

function AddToCartButton({item, className}: {item: Product | CartItem; className: string}) {
  const dispatch = useCartDispatch()
  const {t} = useTranslation()

  function handleAddToCart() {
    dispatch(addToCart(item as CartItem))
    toast.success(item.title + ' ' + t('add_to_cart'), {
      pauseOnHover: false,
      position: 'bottom-right',
    })
  }

  return (
    <div className={`text-center w-full ${className}`}>
      <button
        onClick={handleAddToCart}
        className='bg-slate-50 inline-block border border-slate-300 rounded-md p-2 text-slate-800 hover:bg-slate-800 hover:text-slate-200 transition-[0.3s]'
      >
        {t('AddToCart_button')}
      </button>
    </div>
  )
}

export default AddToCartButton
