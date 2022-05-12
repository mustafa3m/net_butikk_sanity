<template>
  <Header class="header" />
  <main class="main">
    <div v-if="loading">...</div>
    <section id="tea" v-else>
      <div class=".listing-product" v-for="result in results" :key="result._id">
        <h2 class="span">{{ result.title }}</h2>
        <img :src="result.image.asset.url" alt="image" />
        <h3>{{ result.name }}</h3>
        <p>{{ result.description }}</p>
        <p>{{ result.price }} €</p>
        <button class="btn" @click="addProductToCart(result)">
          Add to cart
        </button>
      </div>
    </section>
    <Cart class="cart" :basket="cart" />
  </main>

  <Footer class="footer" />
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

      //console.log("salut", this.result);

      this.metaTags({
        title: "Hello from Home.vue",
      });
    },
    methods: {
      //Legge product i handle kurve
      addProductToCart(product) {
        //console.log("product", product);
        this.$store.commit("ADD_PRODUCT_TO_CART", product);
      },
    },
    computed: {
      ...mapState(["result", "cart", "product"]), //RECUPERE LE STATE AVEC mapSTATE
    },
  };
</script>
<style>
  #tea {
    display: flex;
  }

  .main {
    display: flex;
    gap: 20px;
  }

  .listing-product {
    display: flex;
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
    font-size: 0.8rem;
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

  /* image */
  img {
    height: 200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
