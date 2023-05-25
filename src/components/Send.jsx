import arrowBack from '../assets/arrow-back.svg'
import close from '../assets/close.svg'
import whatsapp from '../assets/whatsapp.svg'
import { TYPE_CART, useCart, useCartDispatch } from '../context/CartContext'
import { TYPE, useOverlayDispatch } from '../context/OverlayContext'

const Send = () => {
  // Back to Info Component
  const overlayDispatch = useOverlayDispatch()
  const cartDispatch = useCartDispatch()
  const backToInfo = () => {
    overlayDispatch({ type: TYPE.SHOW_INFO, payload: true })
    cartDispatch({ type: TYPE_CART.REMOVE_INFO })
  }

  // Close Overlay
  const closeOverlay = () => {
    overlayDispatch({ type: TYPE.CLOSE_OVERLAY })
    cartDispatch({ type: TYPE_CART.REMOVE_INFO })
  }

  // Get cart - total - info
  const cartInfo = useCart()
  const cart = cartInfo.filter(item => item.price)
  const [info] = cartInfo.filter(item => item.payment)
  const cartTotalPrice = cart.map(el => {
    return { ...el, totalPrice: el.price * el.quantity }
  })
  const total = cartTotalPrice.reduce((accumulator, obj) => {
    return accumulator + obj.totalPrice
  }, 0)

  // Send Order to Whatsapp
  const sendOrder = () => {
    const message = `${info.name && `Cliente: ${info.name}
    `}
${cart.map(product => {
  return (`— [ ${product.quantity} ] ${product.name} - ${product.size} > *$ ${(product.price * product.quantity).toFixed(2)}*`)
}).join('\n')}
    
*Total: $ ${total.toFixed(2)}*
Forma de pago: *${info.payment}*
Entrega: *${info.entrega}*
${info.address && `Dirección: *${info.address}*`}
${info.observation && `Obeservación: *${info.observation}*`}`

    const messageEncode = encodeURIComponent(message)
    const url = `https://wa.me/5804121905722?text=${messageEncode}`
    window.open(url, '_blank')
  }

  return (
    <div>
      {/* Header Send */}
      <div className='p-4 absolute top-0 left-0 flex justify-between w-full'>
        <div className='bg-white flex w-fit rounded-full p-1 shadow-xl cursor-pointer' onClick={backToInfo}>
          <img src={arrowBack} alt='back' />
        </div>
        <div className='bg-white flex w-fit rounded-full p-1.5 shadow-xl cursor-pointer ml-auto' onClick={closeOverlay}>
          <img src={close} alt='close' />
        </div>
      </div>
      {/* Send - Info  */}
      <div className='px-4 pt-20 pb-32'>
        <h3 className='font-semibold text-xl mb-2 border-b-2 border-b-grayBackground pb-2'>Detalle de tu compra</h3>
        {cart.map((product, i) => {
          return (
            <div className='border-b-2 border-b-grayBackground pb-4 mt-4 last:border-b-0' key={i}>
              <div className='flex justify-between mb-1'>
                <div className='flex'>
                  <span className='px-1 mr-2 rounded-[3px] bg-grayBackground font-medium'>{product.quantity}</span>
                  <h5 className='font-medium'>{product.name} <span className='text-gray'>({product.size})</span></h5>
                </div>
                <p className='font-medium'>$ {(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          )
        })}
      </div>
      {/* Button Details Shopping  */}
      <div className='relative w-full'>
        <div className='px-4 pb-7 fixed bottom-0 w-full bg-white md:w-5/12'>
          <div className='border-t-2 border-grayBackground pt-4 flex justify-between mb-2'>
            <p className='font-medium'>Total Estimado</p>
            <span className='font-medium'>$ {total.toFixed(2)}</span>
          </div>
          <div className='bg-[#00BFA5] h-12 flex justify-center items-center rounded-lg cursor-pointer' onClick={sendOrder}>
            <p className='font-semibold text-white flex text-[15px] gap-1'>
              <img src={whatsapp} alt='whatsapp' />
              Completar pedido en Whatsapp
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Send
