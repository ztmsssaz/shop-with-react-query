import {memo} from 'react'
import SingleProduct, {type Product} from './product'

const ProductsList = memo(({dataList}: {dataList: Product[]}) => {
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1'>
      {dataList?.map((item: Product) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  )
})

export default ProductsList
