<template>

  <div>

    <CartProduct />
  
  </div>
  
</template>
;

<script>
  import CartProduct from "./CartProduct.vue";
  export default {
    
    props:{

      product: {
        type: Object,
        default: {}
      }
    },
    components: {
      CartProduct,
    },
  };
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }
</style>
