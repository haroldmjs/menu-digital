import { TYPE, useOverlayDispatch } from '../context/OverlayContext'
import close from '../assets/close.svg'

const Cart = () => {
  // Close Overlay Component
  const dispatchOverlay = useOverlayDispatch()
  const handleClose = () => {
    dispatchOverlay({ type: TYPE.CLOSE_OVERLAY })
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
      <div className='p-4 pt-16'>
        <h3 className='font-semibold text-xl'>Tu pedido <span className='text-gray'>(2)</span></h3>
      </div>
    </div>
  )
}

export default Cart
