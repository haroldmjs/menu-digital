import { useState } from 'react'
import arrowBack from '../assets/arrow-back.svg'
import close from '../assets/close.svg'
import { TYPE_CART, useCart, useCartDispatch } from '../context/CartContext'
import { TYPE, useOverlayDispatch } from '../context/OverlayContext'

const initialForm = {
  payment: 'efectivo',
  entrega: 'delivery',
  name: '',
  observation: '',
  address: ''
}

const Info = () => {
  // Handle Form
  const [form, setForm] = useState(initialForm)
  const handleForm = (e) => {
    if (e.target.value === 'pick up') {
      console.log(e.target.value)
      setForm({ ...form, [e.target.name]: e.target.value, address: '' })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  // Close Overlay Component
  const dispatchOverlay = useOverlayDispatch()
  const closeOverlay = () => {
    dispatchOverlay({ type: TYPE.CLOSE_OVERLAY })
  }

  // Back to Cart Component
  const backToCart = () => {
    dispatchOverlay({ type: TYPE.SHOW_CART, payload: true })
  }

  // Get Total
  const cart = useCart()
  const cartTotalPrice = cart.map(el => {
    return { ...el, totalPrice: el.price * el.quantity }
  })
  const total = cartTotalPrice.reduce((accumulator, obj) => {
    return accumulator + obj.totalPrice
  }, 0)

  // Change Overlay to Send Component
  const dispatchCart = useCartDispatch()
  const showComponentSend = () => {
    dispatchCart({ type: TYPE_CART.ADD_INFO, payload: form })
    dispatchOverlay({ type: TYPE.SHOW_SEND, payload: true })
  }

  return (
    <div>
      {/* Header Info */}
      <div className='p-4 absolute top-0 left-0 flex justify-between w-full'>
        <div className='bg-white flex w-fit rounded-full p-1 shadow-xl cursor-pointer' onClick={backToCart}>
          <img src={arrowBack} alt='back' />
        </div>
        <div className='bg-white flex w-fit rounded-full p-1.5 shadow-xl cursor-pointer ml-auto' onClick={closeOverlay}>
          <img src={close} alt='close' />
        </div>
      </div>
      {/* Info Details  */}
      <div className='px-4 pt-20 pb-32'>
        <h3 className='font-semibold text-xl mb-2'>Completa tu pedido</h3>
        <form>
          <label className='font-semibold'>Forma de pago</label>
          <div className='flex items-center border-b-2 border-b-grayBackground py-2'>
            <input type='radio' id='cash' value='Efectivo' name='payment' defaultChecked className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-2.5 before:h-2.5 before:checked:bg-primary before:rounded-full' onChange={handleForm} />
            <label htmlFor='cash' className='ml-1 select-none'>Efectivo</label>
          </div>
          <div className='flex items-center border-b-2 border-b-grayBackground py-2'>
            <input type='radio' id='movil' value='Pago Movil' name='payment' className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-2.5 before:h-2.5 before:checked:bg-primary before:rounded-full' onChange={handleForm} />
            <label htmlFor='movil' className='ml-1 select-none'>Pago móvil</label>
          </div>
          <div className='flex items-center border-b-2 border-b-grayBackground py-2 mb-8'>
            <input type='radio' id='zelle' value='Zelle' name='payment' className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-2.5 before:h-2.5 before:checked:bg-primary before:rounded-full' onChange={handleForm} />
            <label htmlFor='zelle' className='ml-1 select-none'>Zelle</label>
          </div>
          <label className='font-semibold'>Entrega</label>
          <div className='flex items-center border-b-2 border-b-grayBackground py-2'>
            <input type='radio' id='delivery' value='Delivery' name='entrega' className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-2.5 before:h-2.5 before:checked:bg-primary before:rounded-full' defaultChecked onChange={handleForm} />
            <label htmlFor='delivery' className='ml-1 select-none'>Delivery</label>
          </div>
          <div className='flex items-center border-b-2 border-b-grayBackground py-2 mb-8'>
            <input type='radio' id='pickUp' value='Pick Up' name='entrega' className='appearance-none rounded-full w-5 h-5 border-grayBackground border-2 p-0 grid place-content-center before:content-[""] before:w-2.5 before:h-2.5 before:checked:bg-primary before:rounded-full' onChange={handleForm} />
            <label htmlFor='pickUp' className='ml-1 select-none'>Pick up</label>
          </div>
          <label className='font-semibold'>Nombre</label>
          <div className='flex flex-col items-end py-2 mb-4'>
            <input type='text' name='name' className='border-b-2 border-b-grayBackground w-full focus:outline-none focus:border-b-primary' onChange={handleForm} maxLength='70' />
            <span className='text-primary'>{form.name.length}/70</span>
          </div>
          {form.entrega === 'delivery' && (
            <>
              <label className='font-semibold'>Dirección</label>
              <div className='flex flex-col items-end py-2 mb-4'>
                <input type='text' name='address' className='border-b-2 border-b-grayBackground w-full focus:outline-none focus:border-b-primary' onChange={handleForm} maxLength='70' />
                <span className='text-primary'>{form.address.length}/70</span>
              </div>
            </>
          )}
          <label className='font-semibold'>Alguna aclaración</label>
          <div className='flex flex-col items-end py-2'>
            <input type='text' name='observation' className='border-b-2 border-b-grayBackground w-full focus:outline-none focus:border-b-primary' onChange={handleForm} maxLength='70' />
            <span className='text-primary'>{form.observation.length}/70</span>
          </div>
        </form>
      </div>
      {/* Button Details Shopping  */}
      <div className='px-4 pb-7 fixed bottom-0 w-full bg-white'>
        <div className='border-t-2 border-grayBackground pt-4 flex justify-between mb-2'>
          <p className='font-medium'>Total Estimado</p>
          <span className='font-medium'>$ {total.toFixed(2)}</span>
        </div>
        <div className='bg-primary h-12 flex justify-center items-center rounded-lg cursor-pointer' onClick={showComponentSend}>
          <p className='font-semibold text-white'>Realizar compra</p>
        </div>
      </div>
    </div>
  )
}

export default Info
