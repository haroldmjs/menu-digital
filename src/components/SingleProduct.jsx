import arrowBack from '../assets/arrow-back.svg'
import { TYPE, useOverlay, useOverlayDispatch } from '../context/OverlayContext'

const SingleProduct = () => {
  // Get Single Product for OverlayContext
  const overlay = useOverlay()
  const section = overlay.filter(el => el.section === 'product')
  const { product } = section[0]

  // Close Overlay Component
  const dispatchOverlay = useOverlayDispatch()
  const handleClose = () => {
    dispatchOverlay({ type: TYPE.CLOSE_OVERLAY })
  }

  return (
    <div>
      {/* Header-Overlay  */}
      <div className='p-4 absolute top-0 left-0'>
        <div className='bg-white flex w-fit rounded-full p-1 shadow-xl cursor-pointer' onClick={handleClose}>
          <img src={arrowBack} alt='back' />
        </div>
      </div>
      {/* Img Product  */}
      <div className={`h-[40vh] bg-[url("src/assets/products/${product.image}")] bg-cover bg-center`} />
      {/* Product Details  */}
      <div className='p-4 pt-8 rounded-t-xl -mt-3 bg-white'>
        <h4 className='font-semibold text-xl'>Pernil BBQ</h4>
        <form>
          <label htmlFor='' className='font-semibold'>Tamaño*</label>
          <div className='flex items-center'>
            <input type='checkbox' id='mini' value='mini' name='size' className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-3 before:h-3' />
            <label htmlFor='mini' className='ml-1'>Mini</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SingleProduct
