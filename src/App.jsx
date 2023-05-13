import MenuDigital from './components/MenuDigital'
import { CartProvider } from './context/CartContext'
import { OverlayProvider } from './context/OverlayContext'

function App () {
  return (
    <>
      <OverlayProvider>
        <CartProvider>
          <MenuDigital />
        </CartProvider>
      </OverlayProvider>
    </>
  )
}

export default App
