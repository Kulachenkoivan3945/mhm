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

          <div class="product-recomendations">

           
              <div 
              @click="changeRecomendationsState"
              :class="{'recomendations-btn-hidden': isRecomendationsShowed}"
                class="recomendations-btn">
                <p style="color: rgb(100, 100, 100);">Рекомендации</p>
                <img src="../assets/images/icons/slider-right-btn.png" alt="">
              </div>
              <div :class="{'recomendations-hidden': !isRecomendationsShowed}" class="recomendations-text">
                <img @click="changeRecomendationsState"
                src="../assets/images/icons/slider-left-btn-white.png" alt="">
                <div>
                  <p>Одежду лучше стирать в стиральной машине на режимах ручная стирка и быстрая стирка.</p>
                  <p>Украшениям вернут первоначальный блеск теплая ванночка из раствора воды, шампуня и нашатырного спирта</p>
                </div>
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
      isRecomendationsShowed:false
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
    },
    changeRecomendationsState(){
      this.isRecomendationsShowed = !this.isRecomendationsShowed;
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
  overflow: hidden;
  transition: all 0.5s ease-in-out;

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

/*
.fade-recomendations-enter-active, .fade-recomendations-leave-active{
  transition: all 1s ease-in-out
}

.fade-recomendations-enter-from{
  opacity: 0;
  transform: translateX(-10%);
}
.fade-recomendations-leave-to {
  opacity: 0;
  width: 0px;
  
}*/
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
  width: 30px !important;
  margin-right: 10px;
  
}

.price {
  margin-right: 40px;
}

.product-recomendations{
  display: flex;
  align-items: flex-start;
  position: relative;
}
.recomendations-btn{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  min-width: 100%;
  position: absolute;
  transition: all 0.5s ease-in-out;
}
.recomendations-btn img{
  height: 30px;
  transition: 0.5s ease-in-out;
}

.recomendations-btn-hidden{
  transform: translateX(150%);
}

.recomendations-text{
  border: 1px solid rgba(128, 128, 128, 0.415);
  min-width: 100%;
  height: 180px;
  color: rgb(32, 32, 32);
  transition: all 0.5s ease-in-out;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(13, 6, 72);
  color: white;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}
.recomendations-text img{
  height: 20px;
  margin-right: 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.recomendations-btn img:hover{
  transform: translateX(5px);
}
.recomendations-text img:hover{
  transform: translateX(-5px);
}

.recomendations-hidden{
  height: 30px;
  transform: translateX(-120%) ;
}


@media(max-width:1050px) {
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
    width: 80%;
    padding-right: 30px;
    border-right: 1px solid gray;
  }
  .text-block{
    padding-right: 30px;
  }

  .images-block {
    margin-left: 0;
    width: 80%;
    align-self: center;
  }
}

@media(max-width:700px) {

  .description-block {
    width: 100%;
    padding-right: 30px;
    border-right: 1px solid gray;
  }

  .images-block{
    min-width: 0px;
    height: auto !important;
    min-height: 0px;
    max-height: 80%;
    max-width: 90%;
  }

}

@media(max-width:500px) {

  .description-block {
    width: 100%;
    padding-right: 30px;
    border-right: 1px solid gray;
  }

  .images-block{
    width: 100%;
    max-width: 100%;
    max-height: 80vh !important;
  }
  .main-image{
    max-height: 80vh !important;
  }
  .text-block{
    padding-left: 10px;
    padding-right: 10px;
  }
  .go-back img{
    width: 45px;
    margin-bottom: 20px;
  }
}

@media(max-width:320px) {

  .description-block{
    padding-left: 10px;
    padding-right: 10px;
  }
  .buy-block{
    flex-direction: column;
    align-items: center;
  }
  .buy-btn{
    height: 40px;
    width: 160px;
   
  }
  
}
</style>
