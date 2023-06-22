<template>
  <div class="home">

    <div class="go-back">
        <img 
        @click="goBack"
        src="../assets/images/icons/go-back.png" alt="">
    </div>

    <div class="product-container">

      <div class="images-block">
        <div class="main-image-container">
          <div class="main-image">
            <template v-for="image in product.images" :key="image">
              <img v-if="image.type=='img'" :style="imagePosition"
              :src="require(`../assets/images/products/` + image.src)" alt="">

              <video v-else 
              autoplay="autoplay" loop controls muted preload="auto" :style="imagePosition">
                <source :src="require(`../assets/images/products/` + image.src)" type="video/mp4">
              </video>

            </template>
            
          </div>
          <div class="current-image">
            <span v-for="n in product.images.length" :key="n" :class="{ 'current-image-indicator-active': n == (activeImage + 1) }"
              class="current-image-indicator"></span>

          </div>
          <span @click="prevImage" class="click-left"></span>
          <span @click="nextImage" class="click-right"></span>
        </div>


      </div>

      <div class="text-block">
        <div class="description-block">

          <h3 class="title">
            {{ product.name }}
          </h3>

          <div class="buy-block">
            <p class="price">Цена: 
              <span v-if="product.discountPrice" class="bold discount">{{ product.discountPrice }}₽</span>
              <span :class="{'price-old':product.discountPrice}" class="bold">{{ product.price }}₽</span>
            </p>
           
            <div class="to-cart">
              <transition name="fade" mode="out-in">
                <button v-if="!isInCart"
                key="on"
                @click="addToCart"
                class="buy-btn">
                  <img src="../assets/images/icons/cart.png" alt="">
                  <p>В корзину</p>
                </button>
  
                <button v-else
                @click="removeFromCart"
                key="off"
                class="buy-btn buyed">
                  <img src="../assets/images/icons/cart.png" alt="">
                  <p>В корзине</p>
                </button>
              </transition>
            </div>
          </div>

          <div class="description">
            <p style="color: rgb(100, 100, 100);">Описание:</p>
            <p class="text-description">{{ product.title }}</p>
          </div>
          <p style="color: rgb(100, 100, 100);">Характеристики:</p>
          <div class="params">

            <div>
              <p class="service-inscription" style="color: rgb(100, 100, 100);">Размер:</p>
              <p class="text-description">{{ product.size }}</p>
            </div>
            <div>

              <p class="service-inscription" style="color: rgb(100, 100, 100);">Состав:</p>
              <p class="text-description">{{ product.composition }}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ProductsView',
  data() {
    return {
      mainImage: "",
      activeImage: 0,
    }
  },
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
    },
    nextImage() {
      if (this.activeImage < this.product.images.length -1) this.activeImage++

    },
    prevImage() {
      if (this.activeImage > 0) this.activeImage--
    },
    goBack(){
      history.back();
    }
  },
  computed: {
    productId() {
      return +this.$route.params.id;
    },
    product() {
      return this.$store.getters.getProductById(this.productId);
    },
    isInCart() {
      return this.$store.getters.getCountInCartById(this.productId);
    },
    imagePosition() {
      return 'transform:' + 'translateX(-' + this.activeImage * 100 + '%)';
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>

.home{
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  background-size: cover;
  background-color: rgba(197, 193, 236, 0.205);
}
.product-container {
  width: 100vw;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 0px;
  /*background-image: url("../assets/images/mainPage/12.jpg");*/
}
.go-back img{
padding-left: 20px;
transition: all 0.5s ease-in-out;
}
.go-back img:hover{
  transform: translateX(-10px);
}
.go-back a{
  display: block;
  width: 32px;
}
.images-block {
  min-width: 40%;
  max-width: 40%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  max-height: 600px;
}

.main-image-container {
  position: relative;
  width: 90%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 20px;

}

.main-image {
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: row;
  flex-basis: 100%;

}

.main-image img {
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  max-height: 600px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

}

.main-image video {
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  max-height: 600px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

}
.current-image {
  width: 100%;
  height: 50px;
  position: absolute;
  background: linear-gradient(to bottom, transparent, rgba(21, 21, 21, 0.897));
  left: 0px;
  top: calc(100% - 50px);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.current-image-indicator-active {
  background-color: white !important;
}

.current-image-indicator {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.511);
  border-radius: 50%;
  margin: 3px;
  margin-bottom: 10px;
}

.click-left {
  position: absolute;
  height: 100%;
  width: 50%;
}

.click-right {
  right: 0;
  position: absolute;
  height: 100%;
  width: 50%;
}


.text-block {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 50px;
  height: 100%;
  line-height: 1.5;
  white-space: pre-line;
}

.description-block {
  background-color: rgba(255, 255, 255, 0.529);
  padding: 30px;
  padding-top: 0;
  border-radius: 10px;

}


.params {
  display: flex;
  flex-direction: row;
}

.service-inscription {
  text-align: center;
}

.params div {
  padding: 20px;
  border-bottom: none;
}

.params div:first-child {
  border-right: 1px solid gray;
}

.bold {
  font-weight: bold;
  padding-left: 5px;
}

.text-description {
  color: rgb(32, 32, 32);
}

.buy-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.price-old{
  text-decoration: line-through;
  color: gray;
  font-size: 0.8rem;
}
.discount{
  color: red;
  padding-right: 5px;
}
.buy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background-color: rgba(144, 143, 82, 0.342);
  padding-left: 15px;
  padding-right: 15px;
  width: 200px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease-in-out
}

.fade-enter-from{
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.to-cart{
  position: relative;
  width: 200px;
  height: 55px;
}
.buy-btn p {
  font-size: 1.1rem;
}

.buyed{
  background-color: rgba(15, 190, 15, 0.441);
}


.to-cart img {
  width: 30px;
  padding-right: 20px;
}

.price {
  margin-right: 40px;
}


@media(max-width:920px) {
  .product-container {
    flex-direction: column;
    height: 100%;
    max-height: none;
  }

  .text-block {
    padding-top: 20px;
    flex-direction: row;
    justify-content: space-around;
  }

  .description-block {
    width: 50%;
    padding-right: 30px;
    border-right: 1px solid gray;
  }

  .images-block {
    width: 80%;
    min-width: 80%;
    align-self: center;
  }

  .buy-block {
    padding-left: 20px;
  }
}

@media(max-width:500px) {

  .product-container {
    padding-top: 80px;
    max-height: unset !important;

  }

  .images-block {
    padding-left: 0;
    padding-right: 0;
    width: 90%;
    max-height: unset !important;
    height: 100%;
    min-width: unset !important;
    max-width: unset !important;
    flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
  }

  .main-image {
    width: 100%;
  }

  .main-image img {
    height: 400px;
  }

  .aside-images {
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: 100px 100px;
    order: 1;
    width: 100%;
  }

  .aside-image-container {
    border: 0px;
  }

  .text-block {
    flex-direction: column;

  }

  .description-block {
    width: 100%;
    border-right: 0px;
    padding-right: 0;
    border-bottom: 1px solid gray;
  }

  .text-description {
    width: 100%;
  }

  .buy-block {
    align-items: center;
    padding-left: 0px;
  }

  .cart-block {
    justify-content: center;
  }

  .to-cart {
    width: 170px;
  }

  .to-cart img {
    width: 25px;
  }

  .cart-block-btn {
    width: 150px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .cart-block-btn img {
    width: 25px;
    height: 25px;
  }

  .remove-btn {
    width: 15px !important;
    height: 15px !important;
  }
}
</style>
