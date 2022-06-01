export default {
  state() {
    return {
      result: [],
      cart: [],
      product: [],
      quantity: 1,
      totalPrice: 0,
    };
  },
  
  mutations: {
    //Legge producter i cart
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
    },
    // Slett produkter
    DELETE_PRODUCT(state, product) {
      state.cart.splice(product, 1);
    },

    // Regn ut den totale summen av produktene
    SUB_TOTAL_ITEMS(state) {
      let totalPrice = state.cart.reduce((acc, cartItem) => {
      
        return (
          parseInt(acc) +
          parseInt(cartItem.product.price) * parseInt(cartItem.quantity)
        );
      }, 0);

      state.totalPrice = totalPrice;
    },
  },
};
