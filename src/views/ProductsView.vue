
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
      <ul ref="productsList">
        <transition-group name="product-list" mode="out-in">
          <li v-for="product in showedProducts" :key="product.id">
            <ProductCard :productInfo="product" ref="productCardItem" class="product-item  " />
          </li>
        </transition-group>
      </ul>
    </div>

    <div ref="showMoreProductsBtn" class="products-show-more">
      <button @click="showMoreProducts">Показать еще</button>
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
      isNoMatches: false,
      showedProductsIncrement: 0,
      showedProductsCount: this.$store.state.showedProductsCount
    }
  },
  computed: {
    showedProducts() {
      return this.searchResults.slice(0, this.showedProductsCount);
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
    },
    showMoreProducts() {

      console.log(this.showedProductsCount);

      console.log(this.showedProductsCount + this.showedProductsIncrement
        <= this.searchResults.length);
      if (this.showedProductsCount + this.showedProductsIncrement
        <= this.searchResults.length) {
        this.showedProductsCount += this.showedProductsIncrement;
        this.$store.state.showedProductsCount = this.showedProductsCount;
      }
      else {
        this.showedProductsCount = this.searchResults.length;
        console.log(this.showedProductsCount);
        console.log(this.searchResults.length);
        console.log(this.searchResults);
        this.$store.state.showedProductsCount = this.showedProductsCount;
        if (this.showedProductsCount >= this.searchResults.length) {
          setTimeout(() => {
            this.$refs.showMoreProductsBtn.style.display = 'none';
          }, 500);
        }
      }

      setTimeout(() => {
        this.$refs.productsList.children[this.showedProductsCount - 1].scrollIntoView({ block: 'end', behavior: 'smooth' });
      }, 100);


      /* if(this.$store.state.showedProductsCount + this.showedProductsIncrement
       >= this.searchResults){
        this.$store.state.showedProductsCount = this.searchResults.count;
      }
      else {
        this.showedProductsCount += this.showedProductsIncrement;
      this.$store.state.showedProductsCount += this.showedProductsIncrement;
      }
      setTimeout(() => {
        this.$refs.showMoreProductsBtn.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }, 100);

      if (this.showedProductsCount >= this.searchResults.length) {
        setTimeout(() => {
          this.$refs.showMoreProductsBtn.style.display = 'none';
        }, 200);
      } */

    },
  },
  mounted() {
    this.$store.state.activaPage = 'products';
    const containerWidth = document.querySelector('.products-container ul').clientWidth;
    const itemWidth = document.querySelector('.products-container li').clientWidth;
    const itemInRow = Math.floor(containerWidth / itemWidth);
    console.log(itemInRow);
    if (this.$store.state.showedProductsCount == 1) {
      this.showedProductsIncrement = 10 + (10 % itemInRow);
      console.log(10 % itemInRow);
      console.log('inc' + this.showedProductsIncrement);
      this.showedProductsCount = this.showedProductsIncrement;
      this.$store.state.showedProductsCount = this.showedProductsIncrement;

    }

    console.log(itemInRow)
    /* function scrollAnimation() {
      var scrollAnimated = document.querySelectorAll(".products-scroll-animated");

      for (var i = 0; i < scrollAnimated.length; i++) {
        if (!scrollAnimated[i].classList.contains("animated-active")) {
          var windowHeight = window.innerHeight;
          var elementTop = scrollAnimated[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            scrollAnimated[i].classList.add("products-animated-active");
          }
        }
      }
    }

    window.addEventListener("scroll", scrollAnimation); */
    window.scroll(0, 10);
    /* window.scrollTo(0, 0) */


  }
}

</script>

<style>
.products-animated-active {
  opacity: 1 !important;
  z-index: 1 !important;
  transform: none !important;
}

.products-scroll-animated {
  opacity: 0.3;
  z-index: -1 !important;
  transform: scale(0.5);
  transition: all 1s ease-in-out !important;

}

.products {
  padding: 100px 30px 80px 30px;
  /* background-image: url("../assets/images/mainPage/11.jpg");*/
  background-color: rgba(10, 122, 130, 0.133);
  background-size: cover;
  position: relative;
}

.products-container ul {
  padding-left: 0;
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

.products-show-more {
  width: 100%;
  display: flex;
  justify-content: center;
}

.products-show-more button {
  margin-top: 30px;
  padding: 15px;
  width: 200px;
  border-radius: 10px;
  background-color: rgba(236, 235, 235, 0.732);
  border: 1px solid rgba(112, 112, 112, 0.655) !important;
  color: rgb(0, 0, 0);
  cursor: pointer;
  box-shadow: 5px 5px 10px gray;
  transition: all 0.5s ease-in-out;
}

.products-show-more button:hover {
  background-color: #0c022c;
  color: white;
}
</style>
