import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {getRequest} from '../../api'
import {AxiosResponse} from 'axios'
import SingleProduct, {Product} from './product'

function ProductItems() {
  const data = useSelector((state: any) => state.cart)

  const [products, setProducts] = useState<Product[]>([])

  async function getProducts() {
    try {
      getRequest('/products').then((res: AxiosResponse) => {
        setProducts(res.data)
      })
    } catch (error) {
      console.error('error')
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='flex flex-wrap justify-around'>
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  )
}

export default ProductItems
