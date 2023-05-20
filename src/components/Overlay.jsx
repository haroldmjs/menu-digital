import { useOverlay } from '../context/OverlayContext'
import Cart from './Cart'
import SingleProduct from './SingleProduct'

const Overlay = () => {
  const overlay = useOverlay()
  const active = overlay.find(({ active }) => active === true)

  return (
    <div className='md:w-5/12 md:m-auto md:relative bg-white h-screen overflow-auto'>
      {active?.section === 'cart' && <Cart />}
      {active?.section === 'product' && <SingleProduct />}
    </div>
  )
}

export default Overlay
