<template>
  <div class="container">
    <div class="discount-card-description">
      <!-- <img class="arrow-left" src="../assets/images/icons/arrow-left.png" alt=""> -->
      <p class="discount-card-text">{{discount.title}}</p>
<!--       <img class="arrow-right" src="../assets/images/icons/arrow-right.png" alt=""> -->
    </div>
    <div class="discount-list">
      <ProductCard v-for="item in discount.products" :key="item" :productInfo="product(item.id)" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/products/ProductCard.vue'

export default {
  name: 'discountCard',
  components: {
    ProductCard
  },
  props: ['discount'],
  methods: {
    product(id) {
      console.log(this.$store.getters.getProductById(id));
      return this.$store.getters.getProductById(id);
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  
}
.discount-card-description{
  background-color: rgba(255, 255, 255, 0.629);
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.arrow-left{
  padding-right: 20px;
}
.arrow-right{
  padding-left: 20px;
}
.discount-card-text{
  white-space:pre-line;
  text-align: justify;

}
.discount-list {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-auto-flow: column;
  grid-auto-columns: 320px;
  overflow:scroll;
  gap: 50px 20px;
  justify-items: stretch;
}
.discount-list:last-child{
  padding-right: 20px;
}

</style>
