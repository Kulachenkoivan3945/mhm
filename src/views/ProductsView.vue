<template>
  <div class="products">
    <div class="products-container">
      <ProductCard v-for="product in products" :key="product.id" :productInfo="product" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/products/ProductCard.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductCard
  },
  data() {
    return {
      products: this.$store.state.allProducts
    }
  },
  mounted(){
    /* window.scrollTo(0, 0) */
  }
}
</script>

<style>
.products {
  padding-top: 100px;
  background-image: url("../assets/images/mainPage/11.jpg");
  background-size: cover;
  padding-bottom: 80px;
}

.products-container {
  padding-left: 30px;
  padding-right: 30px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-template-rows: repeat(auto, 500px);
  gap: 50px 20px;
  justify-items: stretch;
}
</style>
