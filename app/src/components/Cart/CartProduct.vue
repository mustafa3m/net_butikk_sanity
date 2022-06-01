<template>

  <div class="productCart product">

    <strong >{{ product.product.name }} </strong>

    <span > Price {{ product.product.price }}</span>

    <span @click="changeNumberOfUnits(product.product)"> quantity  {{ product.quantity }}</span>

    <button class=" product-margin product-button" @click="deleteProduct(product.product._id)" > * </button>

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
  
    methods: {
      //delete
      deleteProduct(product) {
        

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
    gap:1rem;
    
  
  }
  strong {
    font-size: 0.9rem;
    flex: none;
    
   
  }

 .product-button {
  color: red; 
  
  }
  .productCart {
  
    max-width: 100%;
    margin-bottom: 1rem;
    margin-right: 3rem;
  }
  .product-margin {
    margin-left: 5px;
  }

    @media screen and (max-width: 550px) {
      strong {
        font-size: 0.8rem;
        flex: none ;
      }

      .productCart{ 
        margin-right: 3rem;
      }
    }
</style>
