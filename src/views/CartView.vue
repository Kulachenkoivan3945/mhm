<template>
  <div class="cart">
    <div class="cart-items-container">
      <transition-group name="cart-list">
        <CartItem class="cart-item" v-for="item in cart" :key="item.id" :item="item"></CartItem>
      </transition-group>
    </div>
    <div class="cart-buy">
      <div class="cart-buy-text">
        <div>
          <p>Итого </p>
          <div class="dots"></div>
          <p>{{ resultSumm }}₽</p>
        </div>

        <div>
          <p>Сумма за {{cartLength}} товара </p>
          <div class="dots"></div>
          <p>{{ itemsSumm }}₽</p>
        </div>
        
        <div>
          <p>Скидка </p>
          <div class="dots"></div>
          <p>{{ discountSumm }}₽</p>
        </div>

      </div>
      <div class="cart-buy-form">
        <p>Контактная информация</p>
        <form @submit.prevent>
          <label for="">
            <span>Имя</span>
            <input type="text" >
          </label>

          <label for="">
            <span>Фамилия</span>
            <input type="text" >
          </label>

          <label for="">
            <span>Отчество</span>
            <input type="text" >
          </label>

          <label for="">
            <span>Номер телефона</span>
            <input type="tel" >
          </label>

          <label for="">
            <span>Электронная почта</span>
            <input type="email" >
          </label>

          <label for="">
            <span>Адрес доставки</span>
            <textarea></textarea>
          </label>

          <button class="cart-buy-form-btn">Оформить заказ</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CartItem from '@/components/CartItem.vue'

export default {
  name: 'ProductsView',
  components: {
    CartItem
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


  },
  computed: {
    cart() {
      return this.$store.state.productsInCart;
    },
    resultSumm() {
      let summ = 0;
      this.cart.forEach(item => {
        let price=0;
        if (this.$store.getters.getProductById(item.id).discountPrice) {
          price = this.$store.getters.getProductById(item.id).discountPrice;
        }
        else price = this.$store.getters.getProductById(item.id).price;
        summ += price*1;
        console.log(summ);
      });
      return summ;
    },
    itemsSumm() {
      let summ = 0;
      this.cart.forEach(item => {
        let price = this.$store.getters.getProductById(item.id).price;
        summ += price*1;
      });
      return summ;
    },
    discountSumm() {
      let summ = 0;
      this.cart.forEach(item => {
        let price = 0;
        if (this.$store.getters.getProductById(item.id).discountPrice) {
          price =this.$store.getters.getProductById(item.id).price
            - this.$store.getters.getProductById(item.id).discountPrice;
        }
        summ += price*1;
      });
      return summ;
    },
    cartLength(){
      return this.cart.length;
    }
  },
  mounted() {
    /* window.scrollTo(0, 0) */

  }
}
</script>

<style>
.cart {
  padding-top: 100px;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: space-between;
}

.cart-items-container {
  margin-left: 40px;
  width: calc(70% - 80px);
  min-height: calc(100vh - 120px);
  max-height: calc(100vh - 120px);
  overflow: scroll;
  border-radius: 10px;
  position: relative;
  border: 1px solid rgba(128, 128, 128, 0.486);
}

.cart-item {
  border-bottom: 1px solid rgba(128, 128, 128, 0.373);
  transition: all 0.7s ease-in-out;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item:nth-child(even) {
  background-color: white;
}

.cart-item:nth-child(odd) {
  background-color: rgba(238, 238, 238, 0.099);
}

.cart-buy {
  width: 30%;
  height: calc(100vh - 140px);
  background-color: rgba(238, 238, 238, 0.099);
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.486);
  padding: 20px;
  padding-bottom: 0;
  margin: 20px;
  margin-top: 0;
  margin-bottom: 0;
}

.cart-buy-text{
  
}
.cart-buy-text div{
  display: flex;
  align-items: flex-end;
  
  
}
.cart-buy-text p{
  font-size: 1.2rem;
  
  padding-top: 10px;
  padding-bottom: 0;
  margin: 0;
  white-space: nowrap;
}

.dots{
  border-bottom: 1px dotted gray;
  height: 1em;
  width: 100%;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

.cart-buy-form{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.cart-buy-form form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;  
}
.cart-buy-form label{
  display: flex;
  flex-direction: column;
  padding-top: 7px;
}

.cart-buy-form input, .cart-buy-form textarea{
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.412);
}

.cart-buy-form-btn{
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.412);
  align-self: center;
  width: 200px;
  color: white;
  background: linear-gradient(90deg, rgb(2, 255, 183),#e902fe, rgb(251, 255, 0));
  background-size: 200% 100%;
  box-shadow: 5px 5px 15px rgb(6, 204, 214);
  transition: 0.5s all ease-in-out;
  cursor: pointer;
}
.cart-buy-form-btn:hover{
  background-position: 100%;
  box-shadow: 5px 5px 15px rgb(234, 3, 255);
}


.cart-list-leave-to {
  opacity: 0;
  transform: translateX(-100%);

}

.cart-list-leave-active {
  position: absolute;
}
</style>
