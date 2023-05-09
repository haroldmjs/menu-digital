
import { useSnapCarousel } from 'react-snap-carousel'
import Product from './Product'

const Carousel = () => {
  const { scrollRef, pages, activePageIndex, goTo } =
    useSnapCarousel()
  return (
    <>
      <ul
        className='carousel pb-8'
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className='mr-2'>
            <Product />
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
