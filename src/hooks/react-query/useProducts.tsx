import {getRequest} from '../../api'
import {AxiosResponse} from 'axios'
import {type Product} from '../../components/shop/product'
import {useTranslation} from 'react-i18next'
import {useQuery, UseQueryResult} from '@tanstack/react-query'

function useProducts(product_country: string = 'all', page: number = 1) {
  const {
    i18n: {language},
  } = useTranslation()

  const getProducts = async (queryKey: string[]) => {
    let result: Product[] = []
    await getRequest('/products', {locale: language, country: queryKey[2], page: queryKey[3]}).then(
      (res: AxiosResponse) => {
        result = res.data
      }
    )
    return result
  }

  const {data, isPending}: UseQueryResult<Product[], Error> = useQuery({
    queryKey: ['products', language, `${page}`, product_country],
    queryFn: ({queryKey}: {queryKey: string[]}) => getProducts(queryKey),
    staleTime: 120 * 1000, //کهنه شدن
  })

  return {data, isPending}
}
export default useProducts
