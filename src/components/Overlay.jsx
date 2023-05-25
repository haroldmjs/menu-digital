import { Suspense, lazy } from 'react'
import { useOverlay } from '../context/OverlayContext'

const Cart = lazy(() => import('./Cart'))
const SingleProduct = lazy(() => import('./SingleProduct'))
const Info = lazy(() => import('./Info'))
const Send = lazy(() => import('./Send'))

const Overlay = () => {
  const overlay = useOverlay()
  const active = overlay.find(({ active }) => active === true)

  return (
    <div className='md:w-5/12 md:m-auto md:relative bg-white h-screen overflow-auto'>
      <Suspense fallback={() => (<h1>lol</h1>)}>
        {active?.section === 'cart' && <Cart />}
        {active?.section === 'product' && <SingleProduct />}
        {active?.section === 'info' && <Info />}
        {active?.section === 'send' && <Send />}
      </Suspense>
    </div>
  )
}

export default Overlay
