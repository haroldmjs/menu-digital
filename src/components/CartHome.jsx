import { useCart } from '../context/CartContext'
import { TYPE, useOverlayDispatch } from '../context/OverlayContext'

const CartHome = () => {
  const cart = useCart()
  const dispatchOverlay = useOverlayDispatch()

  const handleShowCart = () => {
    dispatchOverlay({ type: TYPE.SHOW_CART, payload: true })
  }

  return (
    <div className='fixed z-10 bottom-4 w-full' onClick={handleShowCart}>
      <div className='flex bg-primary w-11/12 m-auto justify-between px-5 py-4 rounded-lg cursor-pointer'>
        <p className='font-semibold text-white'>Tu pedido
          <span className='bg-[#865132] p-1.5 rounded-lg ml-1.5'>
            {cart.length > 1 ? `${cart.length} items` : '1 item'}
          </span>
        </p>
        <p className='font-semibold text-white'>$ 30.00</p>
      </div>
    </div>
  )
}

export default CartHome
