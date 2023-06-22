<template>
  <div class="cart">
    <transition name="cart-fade">
      <div class="cart-container" v-if="cart.length != 0">
        <div class="cart-items-container" ref="cartItemsContainer">
          <transition-group name="cart-list">
            <CartItem @onDeleted="(n) => changeHeight(n)"
              @onMount="(n) => setHeight(n)"
              class="cart-item" v-for="item in cart" :key="item.id" :item="item"></CartItem>
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
              <p>Сумма за {{ cartLength }} товара </p>
              <div class="dots"></div>
              <p>{{ itemsSumm }}₽</p>
            </div>

            <div>
              <p>Скидка </p>
              <div class="dots"></div>
              <p>{{ discountSumm }}₽</p>
            </div>
            <p class="delivery-info">*Доставка осуществляется через СДЭК за счет покупателя</p>
          </div>
          <div class="cart-buy-form">
            <p>Контактная информация</p>
            <form @submit.prevent>
              <label for="">
                <span>Имя</span>
                <input type="text">
              </label>

              <label for="">
                <span>Фамилия</span>
                <input type="text">
              </label>

              <label for="">
                <span>Отчество</span>
                <input type="text">
              </label>

              <label for="">
                <span>Номер телефона</span>
                <input type="tel">
              </label>

              <label for="">
                <span>Электронная почта</span>
                <input type="email">
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

      <div v-else class="empty-cart">
        <h2>Ваша корина пуста</h2>
        <p>Скорее в каталог, там много потрясающих украшений, которые вам обязательно понравятся!</p>
        <router-link to="/products" class="empty-cart-btn">Перейти в каталог</router-link>
      </div>

    </transition>
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
      isNoMatches: false,
      itemsContainerHeight:100
    }
  },
  methods: {
    changeHeight(n){
      this.itemsContainerHeight -=n - 1;
      this.$refs.cartItemsContainer.style.height= this.itemsContainerHeight +'px';
    },
    setHeight(n){
      this.itemsContainerHeight += n + 1;
      this.$refs.cartItemsContainer.style.height= this.itemsContainerHeight+'px';
    }

  },
  computed: {
    cart() {
      return this.$store.state.productsInCart;
    },
    resultSumm() {
      let summ = 0;
      this.cart.forEach(item => {
        let price = 0;
        if (this.$store.getters.getProductById(item.id).discountPrice) {
          price = this.$store.getters.getProductById(item.id).discountPrice;
        }
        else price = this.$store.getters.getProductById(item.id).price;
        summ += price * 1;
      });
      return summ;
    },
    itemsSumm() {
      let summ = 0;
      this.cart.forEach(item => {
        let price = this.$store.getters.getProductById(item.id).price;
        summ += price * 1;
      });
      return summ;
    },
    discountSumm() {
      let summ = 0;
      this.cart.forEach(item => {
        let price = 0;
        if (this.$store.getters.getProductById(item.id).discountPrice) {
          price = this.$store.getters.getProductById(item.id).price
            - this.$store.getters.getProductById(item.id).discountPrice;
        }
        summ += price * 1;
      });
      return summ;
    },
    cartLength() {
      return this.cart.length;
    }
  },
  mounted() {
    this.$store.state.activaPage = 'cart';
    window.scrollTo(0, 0)
    // Select the node that will be observed for mutations
    
  }
}
</script>

<style>
.cart {
  padding-top: 100px;
  min-height: calc(100vh - 100px);
}

.cart-container {
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
}

.cart-items-container {
  margin-left: 40px;
  width: calc(70% - 80px);
  min-height: calc(100vh - 120px);
  max-height: calc(100vh - 120px);
  height: 100vh;
  overflow: scroll;
  border-radius: 10px;
  position: relative;
  border: 1px solid rgba(128, 128, 128, 0.486);
  transition: all 0.7s ease-in-out;
}

.cart-item {
  border-bottom: 1px solid rgba(128, 128, 128, 0.373);
  transition: all 0.7s ease-in-out;
}

.cart-item:last-child {
  transition: all 0.7s ease-in-out;
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

.cart-buy-text {}

.cart-buy-text div {
  display: flex;
  align-items: flex-end;


}

.cart-buy-text p {
  font-size: 1.2rem;

  padding-top: 10px;
  padding-bottom: 0;
  margin: 0;
  white-space: nowrap;
}

.dots {
  border-bottom: 1px dotted gray;
  height: 1em;
  width: 100%;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

.delivery-info{
  font-size: 0.8rem !important;
  width: 100%;
  white-space:break-spaces !important;
}
.cart-buy-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cart-buy-form form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
}

.cart-buy-form label {
  display: flex;
  flex-direction: column;
  padding-top: 7px;
}

.cart-buy-form input,
.cart-buy-form textarea {
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.412);
}

.cart-buy-form-btn {
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.412);
  align-self: center;
  width: 200px;
  color: white;
  background: linear-gradient(90deg, rgb(2, 255, 183), #e902fe, rgb(251, 255, 0));
  background-size: 200% 100%;
  box-shadow: 5px 5px 15px rgb(6, 204, 214);
  transition: 0.5s all ease-in-out;
  cursor: pointer;
}

.cart-buy-form-btn:hover {
  background-position: 100%;
  box-shadow: 5px 5px 15px rgb(234, 3, 255);
}

.empty-cart {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
}

.empty-cart p {
  width: 50%;
  text-align: center;
}

.empty-cart-btn {
  display: block;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  padding: 10px;
  width: 200px;
  border-radius: 7px;
  border: 1px solid rgba(128, 128, 128, 0.212);
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.423));
  background-color: rgb(0, 0, 0);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.866);
  transition: all 0.5s ease-in-out;

}

.empty-cart-btn:hover {
  animation: shake 2s ease-in-out;
  box-shadow: 0px 5px 20px rgba(9, 239, 189, 0.866);
}

@keyframes shake {
  0% {

  }
  25%,75%{
    transform: translateY(5px);
  }
  50%{
    
    transform: translateY(-5px);
    
  }
  
  100%{

  }
}

.cart-list-leave-to {
  opacity: 0;
  transform: translateX(-100%) scale(0);

}

.cart-fade-leave-to,
.cart-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.cart-list-leave-active {
  position: absolute;
}


@media(max-width:1000px) {
  .cart-container {
    flex-direction: column;
    width: 100%;
    margin-right: 0px;
    align-items: center;
  }

  .cart-items-container {
    width: 80%;
    margin-left: 0;
    min-height: max-content;
    height: max-content;
    margin-bottom: 30px;
  }

  .cart-buy {
    width: calc(80% - 40px);
    margin: 0;
    height: auto;
    padding-bottom: 40px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cart-buy-text {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .cart-buy-form {
    width: 100%;
  }
}
</style>
