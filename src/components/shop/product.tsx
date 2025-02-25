export type Product = {
  id: number
  title: string
  price: number
  image: string
  qty: number
  description: string
}

function SingleProduct({product}: {product: Product}) {
  return (
    <div className='w-4/12 flex flex-col justify-around my-1 cursor-pointer'>
      <div className='bg-slate-800 hover:bg-slate-900 transition-[.4s] rounded m-1 p-3'>
        <div>
          <img className='rounded-md' src='src/assets/images/macbook.jpg' alt='macbook' />
        </div>
        <div>
          <h2 className='font-bold text-lg my-2'>{product.title}</h2>
          <p>{product.description}</p>
          <h3>{product.price + ' ' + '$'}</h3>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
