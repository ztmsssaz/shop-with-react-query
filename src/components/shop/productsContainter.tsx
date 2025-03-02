import Loading from '../ui/loading'
import ProductsList from './productsList'
import useProducts from '../../hooks/react-query/useProducts'

function ProductsContainer({filterValue}: {filterValue: string}) {
  const {data} = useProducts(filterValue)
  if (data) {
    return <ProductsList dataList={data} />
  }
  return <Loading />
}

export default ProductsContainer
