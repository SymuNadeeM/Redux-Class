const { createStore } = require("redux");

const PRODUCT = "PRODUCT";
const ADDPRODUCT = "ADDPRODUCT";

const initialProduct = {
  products: ["apple", "orange"],
  totalProduct: 2,
};

const productAction = () => {
  return {
    type: PRODUCT,
  };
};
const addProductAction = (value) => {
  return {
    type: ADDPRODUCT,
    payload: value,
  };
};

const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case PRODUCT:
      return {
        ...state,
      };
    case ADDPRODUCT:
      return {
        products: [...state.products, action.payload],
        totalProduct: state.totalProduct + 1,
      };

    default:
     return state;
  }
};


const store = createStore(productReducer)

store.subscribe(()=>{
  console.log(store.getState());
  
})

store.dispatch(productAction())
store.dispatch(addProductAction("Banana"))