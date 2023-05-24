import { createContext, useContext, useReducer } from 'react'

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
        const idEdit = Date.now()
        return [...cart, { ...action.payload, idEdit }]
      }
    }
    case TYPE_CART.INCREASE_QUANTITY: {
      return cart.map(product => {
        if (product.idEdit === action.payload) {
          return { ...product, quantity: product.quantity + 1 }
        } else {
          return product
        }
      })
    }
    case TYPE_CART.DECREASE_QUANTITY: {
      const productToDecrease = cart.filter(product => product.idEdit === action.payload)
      if (productToDecrease[0].quantity > 1) {
        return cart.map(product => {
          if (product.idEdit === action.payload) {
            return { ...product, quantity: product.quantity - 1 }
          } else {
            return product
          }
        })
      }
      return cart.filter(product => product.idEdit !== action.payload)
    }
    case TYPE_CART.ADD_INFO: {
      return [...cart, action.payload]
    }
    case TYPE_CART.REMOVE_INFO: {
      return cart.filter((item) => item.price)
    }
  }
}

const initialCart = [
]

export const TYPE_CART = {
  ADD_TO_CART: 'ADD_TO_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  ADD_INFO: 'ADD_INFO',
  REMOVE_INFO: 'REMOVE_INFO'
}
