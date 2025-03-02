import {getRequest} from '../../api'
import {AxiosResponse} from 'axios'
import SingleProduct, {type Product} from './product'
import {useTranslation} from 'react-i18next'
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import Loading from '../ui/loading'
import Timeago from '../timeago/timeago'

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

  const {data, fetchStatus, status, isLoading, dataUpdatedAt}: UseQueryResult<Product[], Error> =
    useQuery({
      queryKey: ['products'],
      queryFn: getProducts,
      staleTime: 5 * 1000, //کهنه شدن
      refetchOnMount: true, //  رندر شدن دوباره کامپوننت در صورت کهنه بودت دیتای قبلی
      // refetchOnReconnect: true, // در صورت اتصال مجدد اینترنت
      refetchInterval: 5 * 1000, // در بازه ای مشخص  دوباره ری فچ می‌شود
      retry: 5, //default:3 , در صورت بروز مشکل چند بار دیگر هم تلاش میکند
      // retryDelay: 10 * 1000, // فاصله بین تلاش ها. هم یک تابع هم یک مقدار ثابت
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // 1s → 2s → 4s (حداکثر 30)
    })

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <h1 className='font-bold text-xl'>fetchStatus: {fetchStatus}</h1>
      <h1 className='font-bold text-xl'>status: {status}</h1>
      <h2 className='font-bold text-lg'>
        <Timeago date={dataUpdatedAt} />
      </h2>
      <div className='flex flex-wrap justify-around'>
        {data?.map((item: Product) => (
          <SingleProduct key={item.id} product={item} />
        ))}
      </div>
    </>
  )
}

export default ProductItems
