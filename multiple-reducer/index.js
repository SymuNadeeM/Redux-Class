const { createStore, combineReducers } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

//1 ::: state ::::
//----products
const initialProductState = {
  products: ["apple", "orange"],
  numberOfProducts: 2,
};
//----cart
const initiaLCartState = {
  cart: ["Rose"],
  numberOfProducts: 1,
};


//2 ::: actions ::::
 //Products:
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
 
// Cart
const getCart = () => {
  return {
    type: GET_CART,
  };
};
const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};



// 3. ::::::reducer:::::::
//product
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
     return state;
  }
};

// Cart
const cartReducer = (state = initiaLCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
     return state;
  }
};

// combineReducers
const rootReducer = combineReducers({
  productRe: productReducer,
  cartRe: cartReducer
})


//4store 
const store = createStore(rootReducer)
store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(getProducts())
store.dispatch(addProducts("Banana"))

store.dispatch(getCart())
store.dispatch(addCart("sunFlower"))