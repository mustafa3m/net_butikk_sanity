<template>

  <Header />

  <main class="container">

    <div v-if="loading">...</div>

    <div id="tea" v-else>

      <div class="listing-product" v-for="item in result" :key="item._id">

        <h2 class="listing-product-title">{{item.title }}</h2>

        <img
          class="listing-product-image"
          :src="item.image.asset.url"
          alt="image"
        />

        <h3>{{ item.name }}</h3>

        <p class="listing-product-text">{{ item.description }}</p>

        <p>{{ item.price }} €</p>

        <button class="btn" @click="addProductToCart(item)">
          Add to cart
        </button>

      </div>

    </div>

    <Cart class="cart" :basket="cart" />

  </main>

  <Footer />

</template>

<script>
  import query from "../groq/home.groq?raw";
  import viewMixin from "../mixins/viewMixin.js";
  import Header from "../components/Header.vue";
  import Cart from "../components/Cart/Cart.vue";
  import Footer from "../components/Footer.vue";
  import { computed } from "@vue/runtime-core";
  import { mapState } from "vuex";

  export default {
    components: {
      Header,
      Cart,
      Footer,
    },
    mixins: [viewMixin],

    async created() {
      await this.sanityFetch(query, {
        documentType: "product",
      });

      this.metaTags({
        title: "Net butikk",
      });
    },
    methods: {
      //Legge product i handle kurve
      addProductToCart(product) {
        this.$store.commit("ADD_PRODUCT_TO_CART", product);
      },
    },
    computed: {
      ...mapState(["result", "cart", "product"]), //FÅ STATE MED mapSTATE
    },
  };
</script>
<style>

  #tea {
    display: flex;
    margin-top: 2rem;
   
  }

  .container {
    display: flex;
    gap: 20px;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    
  }


  .listing-product-image {
    width: 50%;
    margin: 0 auto;
    height: auto;
  }

  .listing-product-text{
    font-size: 1.5rem;
  }

  main h1 {
    font-family: var(--font-family);
    font-weight: normal;
    font-size: 4rem;
  }
  main h2 {
    font-family: var(--font-family);
    font-weight: normal;
    font-size: 2rem;
  }

  main h2 span {
    background-color: var(--color-white);
    padding: 10px;
  }

  main h3 {
    font-family: var(--font-family);;
    font-weight: normal;
    font-size: 1.5rem;
    color: var( --text-color);
    margin: 0;
  }

  .btn {
    background-color: var(--background-color-btn);
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 8px 15px;
    border: 0;
    cursor: pointer;
    font-weight: 500;
    margin: 10px 0;
    text-align: center;
    
  }

  .btn:hover {
    background-color: var(--background-color-hover);
    color: var(--color-white);
  }

  

  @media screen and (max-width: 600px) {

    #tea {
      flex-direction: column;
      margin: 1rem;
       width: 100%;
    }
    .listing-product {
      margin-top: 2rem;
      width: 100%;
    }

    .listing-product h2 {
      font-size: 1.3rem;
      margin-bottom: 0.7rem;
    }
    .listing-product-image{ 
      margin-bottom : 1rem;
    }
    .listing-product-text { 
      font-size: 1rem;
      width: 100%;
    }
    .listing-product-title {
      font-size: 1rem;
      
    }
    .btn {
      margin-bottom: 2rem;
    }

    main h3 {
      font-size: 1.5rem;

    }

    .container{
      width: 100vw;
      
    }
  }
</style>
