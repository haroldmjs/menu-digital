import HomeHeader from './HomeHeader'
import { helpHttp } from '../helpers/helpHttp'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import Product from './Product'
import Carousel from './Carousel'

const Home = () => {
  const [loader, setLoader] = useState(false)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const api = helpHttp()
    const urlProducts = 'http://localhost:3000/products'

    setLoader(true)

    api.get(urlProducts).then(res => {
      setProducts(res)
    })

    setLoader(false)
  }, [])

  const handleDots = (lol) => {
    console.log(lol)
  }

  return (
    <>
      <HomeHeader />
      {loader && <Loader />}
      <div className='flex flex-col-reverse mx-4 md:w-11/12 md:m-auto'>
        <Carousel handleDots={handleDots} />
      </div>
    </>
  )
}

export default Home
// .container {
//   display: flex;
//   flex-direction: column-reverse;
// }

// .container div {
//   order: 1;
// }

// .container ul {
//   order: 2;
// }
