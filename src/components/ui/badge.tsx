function Badge({value, className}: {value: string | number; className?: string}) {
  return (
    <div className={`absolute ${className}`}>
      <span className='text-xs min-w-5 min-h-5 font-bold rounded-full flex justify-center items-center text-center'>
        {value}
      </span>
    </div>
  )
}

export default Badge
