<template>
  <div>
    <h2>Order</h2>
    <CartProduct
      v-for="(product, index) in cart"
      :key="index"
      :product="product"
    />
    <button @click="SubTotalItems(index)" class="btn btn-success">
      Order {{ product }} € {{ totalPrice }}
    </button>
    <!-- product.product._id -->
  </div>
</template>
;

<script>
  import CartProduct from "./CartProduct.vue";
  import { computed } from "@vue/runtime-core";
  import { mapState } from "vuex";
  export default {
    components: { CartProduct },

    data() {
      return {
        cartProducts: [],
      };
    },
    mounted() {
      /* console.log("cart ", this.$store.state.cart);
      this.cartProducts = this.$store.state.cart; */
    },
    computed: {
      ...mapState({
        cart: (state) => state.cart,
        totalPrice: (state) => state.totalPrice,
      }), //RECUPERE LE STATE AVEC mapSTATE
    },
    methods: {
      SubTotalItems(product) {
        console.log("Total product", product);
        this.$store.commit("SUB_TOTAL_ITEMS");
      },
    },
  };
</script>

<style scoped>
  div {
    padding: 20px;
  }
  div h2 {
    margin-bottom: 10px;
  }
</style>
