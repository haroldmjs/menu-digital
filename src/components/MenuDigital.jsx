import { useOverlay } from '../context/OverlayContext'
import Home from './Home'
import Overlay from './Overlay'
import { DownUp } from './Transitions'

const MenuDigital = () => {
  const overlay = useOverlay()
  const active = overlay.some(setion => setion.active)

  return (
    <>
      <Home />
      <DownUp render={active}>
        <Overlay />
      </DownUp>
    </>
  )
}

export default MenuDigital
