
import { useSnapCarousel } from 'react-snap-carousel'
import Product from './Product'

const Carousel = ({ products }) => {
  const { scrollRef, pages, activePageIndex, goTo } =
    useSnapCarousel()
  const productsFavorites = products.filter(product => product.favorite === true)
  return (
    <>
      <ul
        className='carousel py-3'
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {Array.from({ length: productsFavorites.length }).map((_, i) => (
          <li key={i} className='mr-2'>
            <Product product={productsFavorites[i]} />
          </li>
        ))}
      </ul>
      <div className='flex justify-between mt-4 max-w-sm'>
        <h2 className='font-semibold text-lg'>Destacados</h2>
        <ol style={{ display: 'flex' }}>
          {pages.map((_, i) => (
            <li key={i}>
              <button
                className={`w-2 h-2 rounded-full ml-1 ${i === activePageIndex ? 'bg-primary' : 'bg-grayBackground'}`}
                onClick={() => goTo(i)}
              />
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default Carousel
