<template>
  <div class="products">
    <div class="search-bar">
      <div>
        <img  src="../assets/images/icons/search.png" alt="">
      <input 
      @keyup.enter="search"
      type="search" v-model="searchQuery" placeholder="Введите поисковый запрос">
      </div>
    </div>
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
      products: this.$store.state.allProducts,
      searchQuery:''
    }
  },
  methods:{
    search(){
      let searchResults = this.$store.getters.getSearchResults(this.searchQuery);
      console.log(searchResults);
    }
  },
  mounted(){
    /* window.scrollTo(0, 0) */
    
  }
}
</script>

<style>
.products {
  padding: 100px 30px 80px 30px;
 /* background-image: url("../assets/images/mainPage/11.jpg");*/
 background-color: rgba(10, 122, 130, 0.133);
  background-size: cover;
  
}

.products-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-template-rows: repeat(auto, 500px);
  gap: 50px 20px;
  justify-items: stretch;
}
.search-bar{
  width: 100%;
  display: flex;
  justify-content: center;
}
.search-bar div{
  width: 80%;
  position: relative;
}
.search-bar input{
  width: 100%;
  padding: 5px;
  padding-left: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.468);
  background-color: rgba(255, 255, 255, 0.823);
  font-size: 1.1rem;

}
.search-bar img{
  position: absolute;
  top: 8px;
  left: 10px;
  background-color: transparent;
}
</style>
