import SingleProduct, {type Product} from './product'

function ProductsList({dataList}: {dataList: Product[]}) {
  return (
    <>
      <div className='flex flex-wrap justify-around'>
        {dataList?.map((item: Product) => (
          <SingleProduct key={item.id} product={item} />
        ))}
      </div>
    </>
  )
}

export default ProductsList
