import { useEffect } from 'react'
import { useOverlay } from '../context/OverlayContext'
import Home from './Home'
import Overlay from './Overlay'
import { DownUp } from './Transitions'

const MenuDigital = () => {
  const overlay = useOverlay()
  const active = overlay.some(setion => setion.active)

  if (active) {
    document.getElementsByTagName('body')[0].classList.add('overflow-hidden')
  } else {
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
  }

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
