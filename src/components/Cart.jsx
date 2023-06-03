import { TYPE, useOverlayDispatch } from '../context/OverlayContext'
import close from '../../public/assets/close.svg'
import { useCart, useCartDispatch, TYPE_CART } from '../context/CartContext'
import { useEffect } from 'react'

const Cart = () => {
  // Get Cart and Dispatch Cart
  const cart = useCart()
  const dispatchCart = useCartDispatch()

  // Close Overlay Component
  const dispatchOverlay = useOverlayDispatch()
  const handleClose = () => {
    dispatchOverlay({ type: TYPE.CLOSE_OVERLAY })
  }

  // Close Cart Empty
  useEffect(() => {
    if (cart.length < 1) { handleClose() }
  }, [cart])

  // Quantity Functions
  const handleSum = (idEdit) => {
    dispatchCart({ type: TYPE_CART.INCREASE_QUANTITY, payload: idEdit })
  }
  const handleRest = (idEdit) => {
    dispatchCart({ type: TYPE_CART.DECREASE_QUANTITY, payload: idEdit })
  }

  // Get Total
  const cartTotalPrice = cart.map(el => {
    return { ...el, totalPrice: el.price * el.quantity }
  })
  const total = cartTotalPrice.reduce((accumulator, obj) => {
    return accumulator + obj.totalPrice
  }, 0)

  // Show Info
  const showComponentInfo = () => {
    dispatchOverlay({ type: TYPE.SHOW_INFO, payload: true })
  }

  return (
    <div>
      {/* Header Cart  */}
      <div className='p-4 absolute top-0 left-0 w-full'>
        <div className='bg-white flex w-fit rounded-full p-1.5 shadow-xl cursor-pointer ml-auto' onClick={handleClose}>
          <img src={close} alt='close' />
        </div>
      </div>
      {/* Cart Details  */}
      <div className='p-4 pt-16 pb-32'>
        <h3 className='font-semibold text-xl mb-6'>Tu pedido <span className='text-gray'>({cart.length})</span></h3>
        {cart.map((product, i) => {
          return (
            <div className='border-b-2 border-b-grayBackground pb-3 mt-3 last:border-b-0' key={i}>
              <div className='flex justify-between mb-1'>
                <h5 className='font-medium'>{product.name} <span className='text-gray'>{product.size && `(${product.size})`}</span></h5>
                <p>$ {(product.price * product.quantity).toFixed(2)}</p>
              </div>
              <div>
                <button type='button' onClick={() => handleRest(product.idEdit)} className='bg-primary text-white w-6 rounded-full'>-</button>
                <input type='number' id='quantity' min='1' value={product.quantity} max='50' disabled className='px-0 w-8 text-center bg-white' />
                <button type='button' onClick={() => handleSum(product.idEdit)} className='bg-primary text-white w-6 rounded-full '>+</button>
              </div>
            </div>
          )
        })}
      </div>
      {/* Button Start Shopping  */}
      <div className='px-4 pb-7 fixed bottom-0 w-full bg-white md:w-5/12'>
        <div className='border-t-2 border-grayBackground pt-4 flex justify-between mb-2'>
          <p className='font-medium'>Total Estimado</p>
          <span className='font-medium'>$ {total.toFixed(2)}</span>
        </div>
        <div className='bg-primary h-12 flex justify-center items-center rounded-lg cursor-pointer' onClick={showComponentInfo}>
          <p className='font-semibold text-white'>Iniciar compra</p>
        </div>
      </div>
    </div>
  )
}

export default Cart
