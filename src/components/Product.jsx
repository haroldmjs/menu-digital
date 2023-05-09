
const Product = () => {
  return (
    <div className='w-44 p-2 shadow-xl rounded-lg pb-5'>
      <div className='bg-[url("src/assets/products/product.jpg")] w-full h-32 rounded-lg bg-cover bg-center' />
      <h3 className='text-base font-semibold'>Pernil BBQ</h3>
      <div className='flex justify-between items-center'>
        <p className='text-base font-semibold'>$ 20.00</p>
        <button className='bg-primary rounded-full w-8 h-8 text-white font-bold text-xl'>+</button>
      </div>
    </div>
  )
}

export default Product
