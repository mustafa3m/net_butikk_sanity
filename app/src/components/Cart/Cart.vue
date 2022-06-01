<template>

  <div class="order">

    <h2>Order</h2>

    <CartProduct
      v-for="(product, index) in cart"
      :key="index"
      :product="product"
    />

    <button  @click="SubTotalItems(index)" class="btn btn-success ">
      Order {{ SubTotalItems(index) }} {{ totalPrice }}  € 
    </button>
    
  </div>

</template>


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

    computed: {
      ...mapState({
        cart: (state) => state.cart,
        totalPrice: (state) => state.totalPrice,
      }), 
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
  .order {
    padding: 20px;
     margin-top: 2rem;
  }
  .order h2 {
    margin-bottom: 10px;
  }
  .btn-success{ 
    background-color: var(--background-color);
    margin-left : 0.5rem;
  }

  @media screen and (max-width: 550px) {
     .order {
    padding: 0px;
    margin-top: 3rem;
    margin-left: 3rem;
    text-align: left;
    
  }

  }
</style>
