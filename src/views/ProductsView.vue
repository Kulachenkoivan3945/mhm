
<template>
  <div class="products">
    <div class="search-bar">
      <div>
        <img src="../assets/images/icons/search.png" alt="">
        <input @keyup.enter="search" type="search" v-model="searchQuery" placeholder="Поиск по названию">
        <p v-if="isNoMatches">По вашему запросу не найдено результатов</p>
      </div>
    </div>
    <div class="products-container">
      <transition-group name="product-list" mode="out-in">
        <ProductCard v-for="product in searchResults" :key="product.id" :productInfo="product" class="product-item" />
      </transition-group>
    </div>
  <!--   <aside class="filter-bar-container">
      <img src="../assets/images/icons/go-back.png" alt="">
      <div class="filter-bar">
        <p>Тип товара:
          <select name="" id="">
            <option value="">Украшения</option>
            <option value="">Одежда</option>
          </select>
        </p>

        <p>Категория товара:
          <select name="" id="">
            <option value="">Украшения</option>
            <option value="">Одежда</option>
          </select>
        </p>

        <p>Тип товара:
        <label class="price-filter">
          <input type="number" name="" id="">
          <span></span>
          <input type="number" name="" id="">
        </label>
        </p>

      </div>
      </aside> -->
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
      searchQuery: '',
      searchResults: this.$store.state.allProducts,
      isNoMatches: false
    }
  },
  methods: {
    search() {
      this.searchResults = this.$store.getters.getSearchResults(this.searchQuery);
      this.isNoMatches = false;
      if (this.searchResults.length == 0) {
        this.searchResults = this.products;
        this.isNoMatches = true;
      }
    }

  },
  mounted() {
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
  position: relative;
}

.products-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 500px;
  justify-items: stretch;
  gap: 20px 20px;

}


.search-bar {
  width: 100%;
  display: flex;
  justify-content: center;
}

.search-bar div {
  width: 50%;
  margin-left: 100px;

  position: relative;
}

.search-bar input {
  width: 100%;
  padding: 5px;
  padding-left: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.468);
  background-color: rgba(255, 255, 255, 0.823);
  font-size: 1.1rem;

}

.search-bar img {
  position: absolute;
  top: 8px;
  left: 10px;
  background-color: transparent;
}

.filter-bar-container {
  width: 250px;
  height: 500px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  z-index: 5;
  top: 100px;
  right: 10px;
  border-radius: 10px;

}
</style>
