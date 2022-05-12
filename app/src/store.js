export default {
  state() {
    return {
      results: [],
      cart: [],
      product: [],
      quantity: 1,
      totalPrice:0,
    };
  },
  getters: {},
  mutations: {
    //addProductToCart(product)

    ADD_PRODUCT_TO_CART(state, product) {
      let existing = state.cart.findIndex((item) => {
        return item.product._id === product._id;
      });

      if (existing >= 0) {
        //endre kvantitet av cart product
        state.cart[existing].quantity += 1;
      } else {
        return state.cart.push({ quantity: 1, product: product }); //push product i cart
      }
      console.log(state.cart);
    },
    DELETE_PRODUCT(state, product) {
      state.cart.splice(product, 1);
    },
    //change number of units for  an item
    CHANGE_NUMBER_OF_UNITS(state, product) {
      let index = state.cart.findIndex(
        (item) => item.product._id === product._id
      );

      state.cart[index].quantity =
        state.cart[index].quantity + product.quantity;
    },
    // calculate subtotal SubTotalItems  ()  {
    SUB_TOTAL_ITEMS(state) {
    let totalPrice = state.cart.reduce((price, cartItem) => {
       return price + (cartItem.price * cartItem.quantity);
     }, 0);
     console.log(totalPrice);
      /* const totalPrice = state.cart.reduce(
        (acc, product) => (acc + product.price) * product.quantity,
        0
      );

      return totalPrice; */
    },
  },
};
