import { createContext, useContext, useReducer } from 'react'
import { helpHttp } from '../helpers/helpHttp'

export const CartContext = createContext()
export const CartDispatchContext = createContext()

export function CartProvider ({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export function useCart () {
  return useContext(CartContext)
}

export function useCartDispatch () {
  return useContext(CartDispatchContext)
}

function cartReducer (cart, action) {
  switch (action.type) {
    case TYPE_CART.ADD_TO_CART: {
      // If product exist sum quantity
      const same = cart.some(el => el.id === action.payload.id & el.size === action.payload.size)
      if (same) {
        const newCart = cart.map(el => {
          if (el.id === action.payload.id & el.size === action.payload.size) {
            return { ...el, quantity: el.quantity + action.payload.quantity }
          } else {
            return el
          }
        })
        return newCart
      } else {
        return [...cart, action.payload]
      }
    }
    case TYPE_CART.REMOVE_FROM_CART: { }
    case TYPE_CART.INCREASE_QUANTITY: { }
    case TYPE_CART.DECREASE_QUANTITY: { }
  }
}

const initialCart = [
]

export const TYPE_CART = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY'
}
