import ProductSmall from './ProductSmall'

const CategoryProducts = ({ category, products }) => {
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  const productsCategory = products.filter(product => product.category === category)
  return (
    <div className='mx-4 md:w-11/12 md:m-auto' id={category}>
      <h2 className='font-semibold text-lg mb-4 mt-6'>{categoryName} <span className='text-gray'>({productsCategory.length})</span></h2>
      <div className='flex flex-wrap gap-2'>
        {productsCategory.map(product => (
          <ProductSmall key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategoryProducts
