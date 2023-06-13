<template>
  <div class="product-card">
    <router-link :to="linkOpen">
      <img class="card-image" :src="require(`../../assets/images/products/` + productInfo.image)" alt="">
      <p class="title">{{ productInfo.name }}</p>
      <p class="price" :class="{ 'old-price': productInfo.discountPrice }">{{ productInfo.price }}₽</p>
      <p v-if="productInfo.discountPrice" class="discount-price">
        {{ productInfo.discountPrice }}₽</p>
    </router-link>
    <div class="cart-block">
      <div @click="addToCart" class="cart-block-btn" :title="!isInCart ? 'Добавить в корзину' : 'Убрать из корзины'">
        <!-- <img src="../../assets/images/icons/add.png" alt=""> -->
        <div class="cart-operations-btn">
          <div class="first-line" :class="{ 'first-line-done': isInCart }"></div>
          <div class="second-line" :class="{ 'second-line-done': isInCart }"></div>
        </div>
        <img src="../../assets/images/icons/cart.png" alt="">
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['productInfo'],
  methods: {
    addToCart() {
      if (!this.isInCart) {
        this.isInCart = true;
        this.$store.commit('addToCart', this.productId);
      }
      else this.removeFromCart();
    },
    removeFromCart() {
      this.isInCart = false;
      this.$store.commit('removeFromCart', this.productId);
    }
  },
  computed: {
    linkOpen() {
      return `/products/${this.productInfo.id}`;
    },
    productId() {
      return +this.productInfo.id;
    },
    isInCart() {
      return this.$store.getters.getCountInCartById(this.productId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
  background-color: rgba(252, 253, 254, 0.47);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  min-height: 100%;
  max-height: 100%;
  height: 100%;

}

a {
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  align-self: stretch;
  justify-self: stretch;
  height: 100%;
}

.card-image {
  margin-top: 20px;
  width: 90%;
  min-height: 350px;
  max-height: 350px;
  object-fit: cover;
  border-radius: 20px;
}

.product-card:hover {
  box-shadow: 5px 5px 15px gray;
}

.product-card p {
  width: 80%;
  word-wrap: break-word;
  text-align: center;
}

.price {
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  margin-bottom: 5px;
}

.discount-price {
  margin-top: 0px;
  font-weight: bold;
  color: red;
}

.cart-block {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.cart-block-btn {
  display: flex;
  align-items: center;
  background-color: rgba(234, 196, 83, 0);
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

}

.cart-block img {
  width: 30px;
  height: 30px;
}

.remove-btn {
  max-width: 20px;
  max-height: 20px;

}

.cart-block p {
  width: 100px;
}

.cart-operations-btn {
  height: 20px;
  width: 20px;
  position: relative;

}

.cart-operations-btn div {
  transition: 0.3s all ease-in-out;
}

.first-line {
  position: absolute;
  top: calc(50% - 2px);
  background-color: black;
  height: 4px;
  width: 100%;
  border-radius: 5px;
}

.first-line-done {
  transform: rotateZ(45deg) scaleX(0.5) translateX(-10px) translateY(8px);
  background-color: rgb(5, 210, 5);
}

.second-line-done {
  transform: rotateZ(45deg);
  background-color: rgb(5, 210, 5) !important;
}

.second-line {
  position: absolute;
  left: calc(50% - 2px);
  background-color: black;
  height: 100%;
  width: 4px;
  border-radius: 5px;
}
</style>
