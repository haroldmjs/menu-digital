import plus from '../assets/plus.svg'
import { TYPE, useOverlayDispatch } from '../context/OverlayContext'

const ProductSmall = ({ product }) => {
  const { name, price, image } = product
  const dispatchOverlay = useOverlayDispatch()

  const handleShowProduct = () => {
    dispatchOverlay({ type: TYPE.SHOW_PRODUCT, payload: { active: true, product } })
  }

  return (
    <div className='w-[48.5%] p-2 shadow-[0_-3px_25px_-2px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] rounded-lg pb-5 mb-2 max-w-[11rem] cursor-pointer' onClick={handleShowProduct}>
      <div className={'bg-[url("src/assets/products/product.jpg")] w-full h-28 rounded-lg bg-cover bg-center'} />
      <h3 className='text-base font-semibold'>{name}</h3>
      <div className='flex justify-between items-center'>
        <p className='text-base font-semibold'>{`$ ${price.toFixed(2)}`}</p>
        <button className='bg-primary rounded-full w-8 h-8 text-white font-bold text-xl'>
          <img src={plus} alt='agregar' className='m-auto' />
        </button>
      </div>
    </div>
  )
}

export default ProductSmall
