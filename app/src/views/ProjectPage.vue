<template>
  <div v-if="loading">...</div>
  <pre v-else> {{ JSON.stringify(result, null, 3) }}</pre>
</template>

<script>
  import query from "../groq/projectPage.groq?raw";
  import viewMixin from "../mixins/viewMixin.js";

  export default {
    data() {
      return {
        //myresult: [],
      };
    },

    mixins: [viewMixin],

    async created() {
     await this.sanityFetch(query, {
        slug: this.$route.params.projectSlug,
      });

	  //console.log(this.myresult)

      this.metaTags({
      	// title: this.result.title,
      	// description: this.result.description,
      	// image: this.result.asset.url
      	//image: this.result.documentation[0].asset.url
      });
    },
  };
</script>
