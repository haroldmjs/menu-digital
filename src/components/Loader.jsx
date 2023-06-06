import './Loader.css'
import whatsapp from '../../public/assets/whatsapp.svg'

const Loader = ({ error }) => {
  const sendWhatsapp = () => {
    const url = 'https://wa.me/5804121927347'
    window.open(url, '_blank')
  }
  return (
    <div className='fixed h-screen w-screen bg-white z-10 flex flex-col items-center justify-center '>
      <img className='w-44 animate-pulse ' src='/assets/logo.png' alt='Brioche Delivery' />
      {error
        ? (
          <div>
            <p className='text-primary font-medium text-center mb-2'>Problemas de conexión 😢</p>
            <div className='bg-[#00BFA5] h-12 flex justify-center items-center rounded-lg cursor-pointer px-2' onClick={sendWhatsapp}>
              <p className='font-medium text-white flex gap-1'>
                <img src={whatsapp} alt='whatsapp' />
                Escribenos por Whatsapp
              </p>
            </div>
          </div>
          )
        : <span className='loader mt-2' />}
    </div>
  )
}

export default Loader
