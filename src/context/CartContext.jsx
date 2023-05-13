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
    case TYPE.ADD_TO_CART: { }
    case TYPE.REMOVE_FROM_CART: { }
    case TYPE.INCREASE_QUANTITY: { }
    case TYPE.DECREASE_QUANTITY: { }
  }
}

const initialCart = [
  {
    id: 1,
    name: 'Pernil BBQ',
    price: 20,
    image: 'product.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    category: 'brioches',
    quantity: 1
  },
  {
    id: 2,
    name: 'Pernil BBQ',
    price: 30,
    image: 'product.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    category: 'brioches',
    quantity: 2
  },
  {
    id: 3,
    name: 'Pernil BBQ',
    price: 40,
    image: 'product.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    category: 'brioches',
    quantity: 3
  }
]

const TYPE = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY'
}
