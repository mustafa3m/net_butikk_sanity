<template>
  <RouterView />
</template>

<script>
  import Home from "../views/Home.vue";
  //   import { reactive } from "vue";

  //  const products = reactive(this.result)

  export default {
    components: {},
  };
</script>

<style>
  @import "../style/reset.css";
  @import "../style/variables.css";
  /*  @import "../style/fonts.css"; */
  @import "../style/style.css";

  .container {
    min-height: 100vh;
    display: grid;
    grid-template-areas: "header header" "home cart" "footer footer";
    grid-auto-columns: 75% 25%;
    grid-row: 48px auto 48px;
  }
  .header {
    grid-area: header;
  }
  .home {
    grid-area: home;
  }
  .cart {
    grid-area: cart;
  }
  .footer {
    grid-area: footer;
  }
</style>
