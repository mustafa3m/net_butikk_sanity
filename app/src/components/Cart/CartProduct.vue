<template>
  <div class="productCart product">
    <strong class="">{{ product.product.name }} </strong>

    <span class=""> Price {{ product.product.price }}</span>

    <span @click="changeNumberOfUnits(product.product)" class=""
      >quantity : {{ product.quantity }}</span
    >
    <button @click="deleteProduct(product.product._id)" class="marginleft">
      Delete
    </button>
  </div>
</template>
;

<script>
  import { computed } from "@vue/runtime-core";
  import { mapState } from "vuex";

  export default {
    props: {
      product: {
        type: Object,
        default: {},
      },
    },
    computed: {
      ...mapState({
        cart: (state) => state.cart,
      }), //RECUPERE LE STATE AVEC mapSTATE
    },
    mounted() {
      //console.log(this.product);
    },
    methods: {
      //delete
      deleteProduct(product) {
        //console.log("DELETE", product);

        this.$store.commit("DELETE_PRODUCT");
      },
      changeNumberOfUnits(product) {
        this.$store.commit("CHANGE_NUMBER_OF_UNITS", product);
      },
    },
  };
</script>

<style scoped>
  .product {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: space-between;
    margin-bottom: 20px;
    padding: 10px;
  }
  strong {
    flex: 1 1 auto;
  }

  button {
    background-color: red;
  }
  .productCart {
    border: var(--border);
    border-radius: var(--border-radius);
    background-color: var(--gray-1);
  }
  .marginleft {
    margin-left: 10px;
  }
</style>
