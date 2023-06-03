import { useState } from 'react'
import arrowBack from '../assets/arrow-back.svg'
import { TYPE, useOverlay, useOverlayDispatch } from '../context/OverlayContext'
import { TYPE_CART, useCartDispatch } from '../context/CartContext'

const SingleProduct = () => {
  // Handle Quantity
  const [quantity, setQuantity] = useState(1)
  const handleSum = () => {
    quantity < 50 && setQuantity(quantity + 1)
  }
  const handleRest = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }

  // Get Single Product for OverlayContext
  const overlay = useOverlay()
  const section = overlay.filter(el => el.section === 'product')
  const { product } = section[0]
  const [productSingle, setProductSingle] = useState(product)

  // Close Overlay Component
  const dispatchOverlay = useOverlayDispatch()
  const handleClose = () => {
    dispatchOverlay({ type: TYPE.CLOSE_OVERLAY })
  }

  // Change Option of Product
  const handleOptions = (e) => {
    if (e.target.value === 'mini') {
      setProductSingle({ ...productSingle, price: productSingle.price - 3, size: e.target.value })
    } else if (e.target.value === 'brioche') {
      setProductSingle({ ...productSingle, price: productSingle.price + 3, size: e.target.value })
    }
  }

  // Handle Add To Cart
  const dispatchCart = useCartDispatch()
  const handleAddToCart = () => {
    if (productSingle.category === 'brioches') {
      const productToAdd = { id: productSingle.id, name: productSingle.name, price: productSingle.price, category: productSingle.category, size: productSingle.size || 'brioche', quantity }
      dispatchCart({ type: TYPE_CART.ADD_TO_CART, payload: productToAdd })
    } else {
      const productToAdd = { id: productSingle.id, name: productSingle.name, price: productSingle.price, category: productSingle.category, quantity }
      dispatchCart({ type: TYPE_CART.ADD_TO_CART, payload: productToAdd })
    }

    handleClose()
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
      <div style={{ backgroundImage: `url("src/assets/products/${productSingle.image}` }} className='h-[40vh]  bg-cover bg-center' />
      {/* Product Details  */}
      <div className='p-4 pt-8 pb-20 rounded-t-xl -mt-3 bg-white'>
        <h4 className='font-semibold text-xl mb-2'>{productSingle.name}</h4>
        {/* Options and Quantity Product  */}
        {productSingle.category === 'brioches' && (
          <form>
            <label htmlFor='' className='font-semibold'>Tamaño*</label>
            <div className='flex items-center border-b-2 border-b-grayBackground py-2'>
              <input type='radio' id='mini' value='mini' name='size' className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-2.5 before:h-2.5 before:checked:bg-primary before:rounded-full' onChange={handleOptions} />
              <label htmlFor='mini' className='ml-1 select-none'>Mini <span className='text-gray'>(7cm)</span></label>
            </div>
            <div className='flex items-center border-b-2 border-b-grayBackground py-2'>
              <input type='radio' id='brioche' value='brioche' name='size' className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-2.5 before:h-2.5 before:checked:bg-primary before:rounded-full' onChange={handleOptions} defaultChecked />
              <label htmlFor='brioche' className='ml-1 select-none'>Brioche <span className='text-gray'>(14cm)</span></label>
            </div>
            <div />
            <div className='flex justify-between mt-2'>
              <p className='font-semibold text-xl'>$ {productSingle.price.toFixed(2)}</p>
              <div>
                <label htmlFor='quantity' className='mr-2'>Cantidad</label>
                <button type='button' onClick={handleRest} className='bg-primary text-white w-6 rounded-full'>-</button>
                <input type='number' id='quantity' value={quantity} min='1' max='50' disabled className='px-0 w-10 text-center' />
                <button type='button' onClick={handleSum} className='bg-primary text-white w-6 rounded-full '>+</button>
              </div>
            </div>
          </form>
        )}

        {/* Description Product  */}
        <p className=' mt-4 text-gray pb-4'>
          {productSingle.description}
        </p>
      </div>
      {/* Button Add to Cart  */}
      <div className='fixed z-10 bottom-0 p-4 pt-7 w-full md:w-5/12 bg-gradient-to-t from-white to-white/25'>
        <div className='flex bg-primary w-12/12 m-auto justify-between px-5 py-4 rounded-lg cursor-pointer' onClick={handleAddToCart}>
          <p className='font-semibold text-white'>Agregar
            <span className='bg-[#865132] p-1.5 rounded-lg ml-1.5'>
              {quantity > 1 ? `${quantity} items` : '1 item'}
            </span>
          </p>
          <p className='font-semibold text-white'>$ {(productSingle.price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
