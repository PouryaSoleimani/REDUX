//^ REDUX STORE => PRODUCTS FILE

const addProduct = "ADD_PRODUCT"
const removeProduct = "REMOVE_PRODUCT"

const getProductStart = "GET_PRODUCTS_START"
const getProductsSuccess = "GET_PRODUCTS_SUCCESS"
const getProductsError = "GET_PRODUCTS_ERROR "

//REDUCER 
export default function reducer(state = 0, action) {
  
  switch (action.type) {
    case addProduct: {
      let newProduct = action.payload
      return [...state, newProduct]
    }
    case removeProduct: {
      const newState = [...state].filter((product) => product.id !== action.id)
      return newState
    }
    case getProductsSuccess: {
      return [...state, ...action.payload]
    }
    case getProductsError: {
      return [...state, { error: action.payload }]
    }
    default: { return state }
  }

}
