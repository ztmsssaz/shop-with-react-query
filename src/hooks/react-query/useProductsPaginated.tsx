import {getRequest} from '../../api'
import {AxiosResponse} from 'axios'
import {type Product} from '../../components/shop/product'
import {useTranslation} from 'react-i18next'
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {useCallback} from 'react'

export type ProductsPageParams = {
  country?: string | null
  page: number
  search: string | ''
}
type PaginateData = {
  results: Product[]
  count: number
  next: string | null
  previous: string | null
}
let result: PaginateData = {
  results: [],
  count: 0,
  next: null,
  previous: null,
}

function useProductsPaginate(pageParams: ProductsPageParams) {
  const {
    i18n: {language},
  } = useTranslation()
  let totalItem: number = 0

  const getProducts = useCallback(
    async (queryKey: [string, string, {page: number; country: string}]) => {
      const queryParams = {locale: language, ...queryKey[2]}
      if (queryKey[2].country != 'all') {
        queryParams.country = queryKey[2].country
      }
      await getRequest('/products/paged', queryParams).then((res: AxiosResponse) => {
        result = res.data
      })
      return result
    },
    [language]
  )

  const {data, isPending}: UseQueryResult<Product[], Error> = useQuery({
    queryKey: ['products', language, pageParams],
    queryFn: ({queryKey}: {queryKey: any}) => getProducts(queryKey),
    select: (res: PaginateData) => {
      totalItem = res.count
      return res.results
    },
    staleTime: 1 * 1000, //کهنه شدن
  })

  return {data, isPending, totalItem}
}
export default useProductsPaginate
