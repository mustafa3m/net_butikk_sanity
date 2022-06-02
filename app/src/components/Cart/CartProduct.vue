<template>

  <div class="productCart product">

    <strong >{{ product.product.name }} </strong>
    <span > Price {{ product.product.price }}</span>
    <span> quantity  {{ product.quantity }}</span>
    <button class=" product-margin product-button" @click="deleteProduct(product.product._id)" > * </button>

  </div>
  
</template>


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
      }), 
    },
  
    methods: {

      // Slett produkter
      deleteProduct(product) {
        this.$store.commit("DELETE_PRODUCT");
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
  color: var( --color-btn-red); 
  
  }
  .productCart {
  
    max-width: 100%;
    margin-bottom: 1rem;
    margin-right: 3rem;
  }
  .product-margin {
    margin-left: 5px;
  }

    @media screen and (max-width: 600px) {

      strong {
        font-size: 0.8rem;
        flex: none ;
      }

      .productCart{ 
        margin-right: 3rem;
      }
    }
</style>
