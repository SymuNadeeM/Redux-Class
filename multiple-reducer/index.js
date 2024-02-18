
const GET_PRODUCTS ="GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

//state:
const initialProductState ={
  products: ["apple","orange"],
  numberOfProducts:2
}

//actions
const getProducts =()=>{
 return {
  type: GET_PRODUCTS,
 }
}