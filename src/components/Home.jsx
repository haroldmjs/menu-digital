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
  const [search, setSearch] = useState('')
  const [searchProducts, setSearchProducts] = useState([])
  const [error, setError] = useState(false)
  const cart = useCart()

  // Get Products
  useEffect(() => {
    const api = helpHttp()
    const urlProducts = 'http://menu-brioche.fly.dev/api/products'
    const maxRetries = 5
    let retryCount = 0

    const fetchData = () => {
      api.get(urlProducts).then(res => {
        window.localStorage.setItem('productDataV1', JSON.stringify(res))
        setProducts(res)
        setSearchProducts(res)
        setLoader(false)
      }).catch(err => {
        console.error(err)
        if (retryCount < maxRetries) {
          retryCount++
          setTimeout(fetchData, 1000)
        } else {
          setError(true)
          console.error('Error en la conexion con la BDD')
        }
      })
    }

    // Use Cache or Create Cache
    const cachedProducts = window.localStorage.getItem('productDataV1')
    setLoader(true)
    if (cachedProducts) {
      setProducts(JSON.parse(cachedProducts))
      setSearchProducts(JSON.parse(cachedProducts))
      setLoader(false)
    } else {
      fetchData()
    }
  }, [])

  // Search and Filter
  const handleSearch = (e) => {
    setSearch(e.target.value)
    const resultSearch = products.filter(product => {
      return product.name.toLowerCase().includes((e.target.value).toLowerCase())
    })
    setSearchProducts(resultSearch)
  }
  const handleFilter = (e) => {
    const sectionElement = document.getElementById(e.target.value)
    sectionElement?.scrollIntoView()
    e.target.value = 'categorias'
  }

  return (
    <>
      {loader && <Loader error={error} />}
      <HomeHeader handleSearch={handleSearch} handleFilter={handleFilter} searchProducts={searchProducts} />
      {/* Carrousel  */}
      {search.length > 0 || (
        products.length > 0 && (
          <div className='flex flex-col-reverse mx-4 md:w-11/12 md:m-auto'>
            <Carousel products={products} />
          </div>
        )
      )}
      {/* Categories  */}
      {search.length > 0
        ? (
          <>
            {searchProducts.some(product => product.category === 'brioches') &&
              (<CategoryProducts category='brioches' products={searchProducts} />)}

            {searchProducts.some(product => product.category === 'para compartir') &&
              (<CategoryProducts category='para compartir' products={searchProducts} />)}

            {searchProducts.some(product => product.category === 'ensaladas') &&
              (<CategoryProducts category='ensaladas' products={searchProducts} />)}

            {searchProducts.some(product => product.category === 'acompañantes') &&
              (<CategoryProducts category='acompañantes' products={searchProducts} />)}
          </>

          )
        : (
          <>
            <CategoryProducts category='brioches' products={products} />
            <CategoryProducts category='para compartir' products={products} />
            <CategoryProducts category='ensaladas' products={products} />
            <CategoryProducts category='acompañantes' products={products} />
          </>
          )}
      {/* Cart Button  */}
      {cart.length > 0 && (
        <CartHome />
      )}
    </>
  )
}

export default Home
