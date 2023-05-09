import Home from './Home'
import { CartProvider } from '../context/CartContext'

const MenuDigital = () => {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}

export default MenuDigital
