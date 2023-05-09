import whatsapp from '../assets/whatsapp.svg'
import instagram from '../assets/instagram.svg'
import motocycle from '../assets/motocycle.svg'
import clock from '../assets/clock.svg'

const HomeHeader = () => {
  return (
    <>
      {/* header image */}
      <div className='h-72 w-12/12 md:w-11/12 m-auto md:rounded-b-lg bg-primary bg-[url("assets/header.jpg")] bg-cover bg-center' />
      {/* header logo and text */}
      <div className='flex justify-between md:w-11/12 m-auto'>
        <img src='src/assets/logo.jpg' alt='Brioche Delivery' className='w-24 h-24 -mt-10 ml-4 rounded-full border-8 border-white' />
        <ul className='flex items-center gap-2 mr-4'>
          <li className='bg-primary rounded-full p-1.5'>
            <a href='#'>
              <img src={whatsapp} alt='Whatsapp' />
            </a>
          </li>
          <li className='bg-primary rounded-full p-1.5'>
            <a href='#'>
              <img src={instagram} alt='Instagram' />
            </a>
          </li>
        </ul>
      </div>
      <div className='mx-4 md:w-11/12 md:m-auto'>
        <h1 className='font-bold text-3xl'>Brioche Delivery</h1>
        <p className='font-semibold text-sm text-gray'>Sandwiches gourmet hechos con amor.</p>
        <div className='flex'>
          <div className='flex items-center gap-1 font-semibold text-sm'>
            <img src={clock} alt='horario' />
            <span>12pm - 8pm</span>
          </div>
          <div className='flex items-center gap-1 font-semibold text-sm ml-7'>
            <img src={motocycle} alt='delivery' />
            <span>15-20 mins</span>
          </div>
        </div>
      </div>
      {/* header search bar */}
      <div className='mx-4 md:w-11/12 md:m-auto'>
        <div className=' flex justify-between bg-grayBackground p-3 mt-3 rounded-lg max-w-sm'>
          <label>
            <input type='text' placeholder='Buscar...' className='w-11/12 bg-grayBackground focus-visible:outline-0' />
          </label>
          <select name='' id='' className='focus-visible:outline-0 font-medium'>
            <option value=''>Categorias</option>
            <option value=''>Brioches</option>
            <option value=''>Para compartir</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default HomeHeader
