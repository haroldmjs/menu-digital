import HomeHeader from './HomeHeader'
import { helpHttp } from '../helpers/helpHttp'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import Carousel from './Carousel'
import CategoryProducts from './CategoryProducts'
import { useCart } from '../context/CartContext'
import CartHome from './CartHome'

const Home = () => {
  const [loader, setLoader] = useState(false)
  const [products, setProducts] = useState([])
  const cart = useCart()

  useEffect(() => {
    const api = helpHttp()
    const urlProducts = 'http://localhost:3000/products'

    setLoader(true)

    api.get(urlProducts).then(res => {
      setProducts(res)
    })

    setLoader(false)
  }, [])

  return (
    <>
      <HomeHeader />
      {loader && <Loader />}
      {products.length > 0 && (
        <div className='flex flex-col-reverse mx-4 md:w-11/12 md:m-auto'>
          <Carousel products={products} />
        </div>
      )}
      <CategoryProducts category='brioches' products={products} />
      <CategoryProducts category='para compartir' products={products} />
      {cart.length > 0 && (
        <CartHome />
      )}
    </>
  )
}

export default Home
