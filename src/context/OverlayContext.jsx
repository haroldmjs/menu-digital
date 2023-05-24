import { createContext, useContext, useReducer } from 'react'

export const OverlayContext = createContext()
export const OverlayDispatchContext = createContext()

export function OverlayProvider ({ children }) {
  const [overlay, dispatch] = useReducer(overlayReducer, initialOverlay)

  return (
    <OverlayContext.Provider value={overlay}>
      <OverlayDispatchContext.Provider value={dispatch}>
        {children}
      </OverlayDispatchContext.Provider>
    </OverlayContext.Provider>
  )
}

export function useOverlay () {
  return useContext(OverlayContext)
}

export function useOverlayDispatch () {
  return useContext(OverlayDispatchContext)
}

function overlayReducer (state, action) {
  switch (action.type) {
    case TYPE.SHOW_PRODUCT: {
      return state.map(item => {
        if (item.section === 'product') {
          return { ...item, active: action.payload.active, product: action.payload.product }
        }
        return item
      })
    }
    case TYPE.SHOW_CART: {
      return state.map(item => {
        if (item.section === 'cart') {
          return { ...item, active: action.payload }
        }
        return { ...item, active: false }
      })
    }
    case TYPE.SHOW_INFO: {
      return state.map(item => {
        if (item.section === 'info') {
          return { ...item, active: action.payload }
        }
        return { ...item, active: false }
      })
    }
    case TYPE.SHOW_SEND: {
      return state.map(item => {
        if (item.section === 'send') {
          return { ...item, active: action.payload }
        }
        return { ...item, active: false }
      })
    }
    case TYPE.CLOSE_OVERLAY: {
      return initialOverlay
    }
  }
}

const initialOverlay = [
  { section: 'cart', active: false },
  { section: 'product', active: false },
  { section: 'info', active: false },
  { section: 'send', active: false }
]

export const TYPE = {
  SHOW_PRODUCT: 'SHOW_PRODUCT',
  SHOW_CART: 'SHOW_CART',
  SHOW_INFO: 'SHOW_INFO',
  SHOW_SEND: 'SHOW_SEND',
  CLOSE_OVERLAY: 'CLOSE_OVERLAY'
}
