import Loading from '../ui/loading'
import ProductsList from './productsList'
// import useProducts from '../../hooks/react-query/useProducts'
import useProductsPaginate from '../../hooks/react-query/useProductsPaginated'
import {ProductsPageParams} from '../../hooks/react-query/useProductsPaginated'
import {useEffect, useState} from 'react'
import ProductFilter from './filter'
import Pagination from '../ui/paginate'
import {useSearchParams} from 'react-router-dom'

function ProductsContainer() {
  useEffect(() => {
    console.log('ProductsContainer')
  }, [])
  const [searchParams] = useSearchParams()
  const [totalItems, setTotalItems] = useState<number>(0)
  const [pageParams, setPageparams] = useState<ProductsPageParams>({
    country: searchParams.get('country'),
    page: 1,
    search: searchParams.get('search'),
  })
  const {data, totalItem, isPending} = useProductsPaginate(pageParams)

  useEffect(() => {
    if (!isPending) {
      setTotalItems(totalItem)
    }
  }, [totalItem])

  const handlePageChange = ({selected}: {selected: number}) => {
    setPageparams({...pageParams, page: selected + 1}) // تبدیل selected به شماره صفحه صحیح
  }

  return (
    <>
      <ProductFilter onFilter={setPageparams} />
      {data ? <ProductsList dataList={data} /> : <Loading />}
      <Pagination totalCount={totalItems} page={pageParams.page} onPageChange={handlePageChange} />
    </>
  )
}

export default ProductsContainer
