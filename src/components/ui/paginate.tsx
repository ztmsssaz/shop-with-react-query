import ReactPaginate from 'react-paginate'

interface PaginationProps {
  totalCount: number // تعداد کل صفحات
  onPageChange: (selected: {selected: number}) => void // تابع تغییر صفحه
  page: number
}

const Pagination = ({totalCount, page, onPageChange}: PaginationProps) => {
  return (
    <>
      {totalCount > 20 && (
        <ReactPaginate
          previousLabel='»'
          nextLabel='«'
          initialPage={page - 1}
          breakLabel='...'
          pageCount={Math.ceil(totalCount / 20)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={onPageChange}
          containerClassName='flex flex-row-reverse items-center justify-center space-x-2 p-4 bg-slate-800 rounded-md mx-1 shadow-md'
          pageLinkClassName='bg-slate-700 text-white cursor-pointer px-3 py-1 rounded-md hover:bg-slate-600 transition'
          activeLinkClassName='!bg-blue-500 text-white px-3 py-1 rounded-md'
          previousLinkClassName='bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-slate-600 transition'
          nextLinkClassName='bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-slate-600 transition'
          breakClassName='text-gray-400'
          disabledClassName='opacity-50 cursor-not-allowed'
        />
      )}
    </>
  )
}

export default Pagination
