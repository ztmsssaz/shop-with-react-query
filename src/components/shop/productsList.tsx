import {memo} from 'react'
import SingleProduct, {type Product} from './product'
import {useTranslation} from 'react-i18next'

const ProductsList = memo(({dataList}: {dataList: Product[]}) => {
  const {t} = useTranslation()
  return (
    <>
      {dataList?.length > 0 ? (
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1'>
          {dataList?.map((item: Product) => (
            <SingleProduct key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className='py-14 text-center'>
          <p>{t('emptyList')}</p>
        </div>
      )}
    </>
  )
})

export default ProductsList
