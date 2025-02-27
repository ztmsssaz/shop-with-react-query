import {getRequest} from '../../api'
import {AxiosResponse} from 'axios'
import SingleProduct, {type Product} from './product'
import {useTranslation} from 'react-i18next'
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import Loading from '../ui/loading'

function ProductItems() {
  const {
    i18n: {language},
  } = useTranslation()

  const getProducts = async () => {
    let result: Product[] = []
    await getRequest('/products', {locale: language}).then((res: AxiosResponse) => {
      result = res.data
    })
    return result
  }

  const result: UseQueryResult<Product[], Error> = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    refetchInterval: 60 * 1000,
    staleTime: 30 * 1000,
  })

  if (result.isPending) {
    return <Loading />
  }
  return (
    <div className='flex flex-wrap justify-around'>
      {result.data?.map((item: Product) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  )
}

export default ProductItems
