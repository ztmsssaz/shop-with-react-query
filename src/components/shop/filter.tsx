import {useState} from 'react'
import {useTranslation} from 'react-i18next'

export default function ProductFilter({onFilter}: {onFilter: (filter: string) => void}) {
  const [selected, setSelected] = useState<string | null>(null)
  const {t} = useTranslation()
  const filters = [
    {label: t('all'), value: 'all'},
    {label: t('chinese'), value: 'CN'},
    {label: t('iranian'), value: 'IR'},
    {label: t('german'), value: 'DE'},
  ]

  const handleFilter = (value: string) => {
    setSelected(value)
    onFilter(value)
  }

  return (
    <div className='bg-slate-800 p-4 rounded-md shadow-md text-white mx-1'>
      <div className='flex flex-wrap gap-2'>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilter(filter.value)}
            className={`px-4 py-2 rounded-lg transition-all
              ${
                selected === filter.value
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-600 text-slate-300'
              } 
              hover:bg-slate-500 hover:text-white`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}
