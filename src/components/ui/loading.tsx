const Loading = () => (
  <div className='relative min-h-[calc(100vh-250px)]'>
    <div className='absolute inset-0 bg-teal-900 bg-opacity-10 z-50 mx-1'>
      <div className='flex items-center justify-center h-full'>
        <svg
          className='animate-spin h-14 w-12 text-slate-950'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='3'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      </div>
    </div>
  </div>
)

export default Loading
