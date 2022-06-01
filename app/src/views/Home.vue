<template>

  <Header />

  <main class="container">
    <div v-if="loading">...</div>

    <section id="tea" v-else>

      <div class="listing-product" v-for="result in results" :key="result._id">

        <h2 class="listing-product-title">{{ result.title }}</h2>

        <img
          class="listing-product-image"
          :src="result.image.asset.url"
          alt="image"
        />

        <h3>{{ result.name }}</h3>

        <p class="listing-product-text">{{ result.description }}</p>

        <p>{{ result.price }} €</p>

        <button class="btn" @click="addProductToCart(result)">
          Add to cart
        </button>

      </div>

    </section>

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

  .listing-product {
    
  
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
    font-family: "Amaranth";
    font-weight: normal;
    font-size: 4rem;
  }
  main h2 {
    font-family: "Amaranth";
    font-weight: normal;
    font-size: 2rem;
  }

  main h2 span {
    background-color: white;
    padding: 10px;
  }

  main h3 {
    font-family: "Amaranth";
    font-weight: normal;
    font-size: 1.5rem;
    color: #666;
    margin: 0;
  }

  .btn {
    background-color: #b09067;
    color: white;
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
    background-color: turquoise;
    color: white;
  }

  

  @media screen and (max-width: 550px) {
    #tea {
      flex-direction: column;
      margin: 1rem;
    }
    .listing-product {
      margin-top: 2rem;
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
