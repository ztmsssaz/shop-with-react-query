import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ProductsPageParams} from '../../hooks/react-query/useProductsPaginated'
import {useSearchParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'

type Inputs = {
  search: string | ''
}
export default function ProductFilter({onFilter}: {onFilter: (data: ProductsPageParams) => void}) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>('all')
  const {t} = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const search: string = searchParams.get('search') as string
  const {register} = useForm<Inputs>()

  const filters = [
    {label: t('all'), value: 'all'},
    {label: t('chinese'), value: 'CN'},
    {label: t('iranian'), value: 'IR'},
    {label: t('german'), value: 'DE'},
  ]

  const handleFilter = (value: string) => {
    setSelectedCountry(value)
    onFilter({
      country: value,
      page: 1,
      search,
    })
    setSearchParams({country: value, search})
  }
  const debounce = <T extends (...args: any[]) => void>(func: T, time: number) => {
    let timer: ReturnType<typeof setTimeout>
    return (...args: Parameters<T>) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)
      }, time)
    }
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    onFilter({
      country: selectedCountry || 'all',
      page: 1,
      search: e.target.value,
    })
    setSearchParams({country: selectedCountry || 'all', search: e.target.value})
  }

  return (
    <div className='flex items-center justify-around bg-slate-800 p-4 rounded-md shadow-md text-white mx-1'>
      <div className='flex flex-wrap gap-2'>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilter(filter.value)}
            className={`px-4 py-2 rounded-lg transition-all
              ${
                selectedCountry === filter.value || searchParams.get('country') === filter.value
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-600 text-slate-300'
              } 
              hover:bg-slate-500 hover:text-white`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div>
        <form>
          <input
            type='text'
            defaultValue={search}
            {...register('search')}
            onChange={debounce(handleSearch, 500)}
            placeholder={t('search')}
            className='w-full p-2 rounded-md text-black'
          />
        </form>
      </div>
    </div>
  )
}
