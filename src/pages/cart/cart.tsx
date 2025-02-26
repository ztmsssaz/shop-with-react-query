import {useTranslation} from 'react-i18next'
import {ShoppingCart, Trash2, ChevronLeft, CreditCard, ChevronRight} from 'lucide-react'
import {useSelector} from 'react-redux'
import {
  type cartState,
  removeFromCart,
  addToCart,
  removeOneProductFromCart,
} from '../../store/cart-slice'
import {Link} from 'react-router-dom'
import {useCartDispatch} from '../../store/hooks'
import {ToastFunc} from './confirmDialog'

const CartPage = () => {
  const {t, i18n} = useTranslation()
  const dispatch: any = useCartDispatch()
  const cartState: cartState = useSelector((state: {cart: cartState}) => state.cart)

  const subtotal = cartState.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleRemoveFromCart = (id: number) => {
    //@ts-ignore
    dispatch(removeFromCart(id))
  }

  return (
    <div className={`min-h-screen ${i18n.dir() === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className='max-w-6xl mx-auto p-4'>
        <div className='flex items-center gap-2 mb-8 border-b border-slate-300 pb-4'>
          <ShoppingCart className='w-6 h-6 text-slate-800' />
          <h1 className='text-2xl font-bold'>{t('cart')}</h1>
        </div>

        {/* محتوا */}
        <div className='grid md:grid-cols-3 gap-8'>
          {/* لیست محصولات */}
          <div className='md:col-span-2 space-y-4 '>
            {cartState.items.length === 0 ? (
              <div className='text-center py-12'>
                <p>{t('cart_empty')}</p>
              </div>
            ) : (
              cartState.items.map((item) => (
                <div
                  key={item.id}
                  className='bg-white text-slate-700 p-4 rounded-lg shadow-sm flex gap-4'
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-24 h-24 object-contain border rounded'
                  />
                  <div className='flex-1'>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <button
                          className='px-2 py-1 border rounded active:bg-slate-400'
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className='px-2 py-1 border rounded'
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>
                      <div className='flex items-center gap-4'>
                        <span className='font-medium'>
                          {(item.price * item.quantity).toLocaleString() + ' ' + t('currency')}
                        </span>
                        <button
                          className='text-red-500 hover:text-red-600'
                          onClick={() => dispatch(removeOneProductFromCart(item.id))}
                        >
                          <Trash2 className='w-5 h-5' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* خلاصه خرید */}
          <div className='bg-white text-slate-600 p-6 rounded-lg shadow-sm h-fit'>
            <h2 className='text-xl text-slate-700 font-semibold mb-4'>{t('cart_summary')}</h2>

            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span>{t('cart_subtotal')}</span>
                <div>
                  <span>{subtotal.toLocaleString()}</span>
                  <span className='mx-1'>{t('currency')}</span>
                </div>
              </div>

              <div className='flex justify-between'>
                <span>{t('cart_shipping')}</span>
                <span className='text-green-600'>{t('free')}</span>
              </div>

              <hr className='my-4' />

              <div className='flex justify-between font-semibold'>
                <span>{t('cart_total')}</span>
                <div>
                  <span>{subtotal.toLocaleString()}</span>
                  <span className='mx-1'>{t('currency')}</span>
                </div>
              </div>

              <button
                className='w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-900 
                flex items-center justify-center gap-2'
              >
                <CreditCard className='w-5 h-5' />
                {t('cart_checkout')}
              </button>

              <Link
                className='flex items-center gap-2 text-blue-600 hover:text-blue-700 w-full 
                justify-center mt-4'
                to='/shop'
              >
                {t('cart_continue_shopping')}
                {i18n.dir() === 'rtl' ? (
                  <ChevronLeft className='w-5 h-5' />
                ) : (
                  <ChevronRight className='w-5 h-5' />
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
