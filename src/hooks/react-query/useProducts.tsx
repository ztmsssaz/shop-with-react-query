import {getRequest} from '../../api'
import {AxiosResponse} from 'axios'
import {type Product} from '../../components/shop/product'
import {useTranslation} from 'react-i18next'
import {useQuery, UseQueryResult} from '@tanstack/react-query'

function useProducts(product_country: string) {
  const {
    i18n: {language},
  } = useTranslation()

  const getProducts = async (queryKey: string[]) => {
    let result: Product[] = []
    await getRequest('/products', {locale: language, country: queryKey[2]}).then(
      (res: AxiosResponse) => {
        result = res.data
      }
    )
    return result
  }

  const {data, isPending}: UseQueryResult<Product[], Error> = useQuery({
    queryKey: ['products', language, product_country],
    queryFn: ({queryKey}: {queryKey: string[]}) => getProducts(queryKey),
    staleTime: 5 * 1000, //کهنه شدن
  })

  return {data, isPending}
}
export default useProducts
