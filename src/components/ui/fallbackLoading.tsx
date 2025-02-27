import {useTranslation} from 'react-i18next'

const FallbackLoading = () => {
  const {
    t,
    i18n: {language},
  } = useTranslation()

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-gray-100'>
      <div className='flex flex-col items-center'>
        <div className='animate-spin h-16 w-16 flex items-center justify-center'>
          <svg
            className='h-16 w-16 text-blue-500'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='25'
              cy='25'
              r='20'
              stroke='currentColor'
              strokeWidth='4'
              fill='none'
              strokeDasharray='125'
              strokeDashoffset='0'
            >
              <animate
                attributeName='stroke-dashoffset'
                from='125'
                to='0'
                dur='1.5s'
                repeatCount='indefinite'
              />
            </circle>
          </svg>
        </div>
        <p
          className={`mt-4 text-lg text-slate-800 ${
            language === 'fa' ? 'font-vazirmatn' : 'font-roboto'
          }`}
        >
          {t('loading')}
        </p>
      </div>
    </div>
  )
}

export default FallbackLoading
