<template>
  <div class="home">

    <div class="about">
      <div class="about-description">
        <h1>MARUSYA HANDMADE</h1>
        <h2>Уникальные украшения ручной работы для индивидуальности в каждой детали</h2>

        <p>Мы стремимся создавать не просто украшения, а маленькие произведения искусства, которые помогут подчеркнуть
          вашу индивидуальность и не оставят равнодушным никого из вашего окружения.</p>
        <div class="title-btn">
          <button>
            <router-link to="/products">Перейти к выбору</router-link>
          </button>
        </div>
      </div>
    </div>

    <div class="discounts">
      <h2>Акции и скидки</h2>
      
      <div class="discounts-cards-container">
        <discountCard v-for="discount in discounts" :key="discount" :discount="discount"/>
      </div>
      
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import discountCard from '@/components/discountCard.vue'

export default {
  name: 'HomeView',
  components: {
    discountCard
    //HelloWorld
  },
  data() {
    return {
      discounts: this.$store.state.discounts
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
}

.about::after {
  content: '';
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/images/mainPage/9.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}

.about-description h1{
  color: rgb(60, 89, 149);
}

.about-description {
  
  position: relative;
  border-radius: 20px;
  width: 30%;
  z-index: 2;
  color: rgb(0, 0, 0);
  text-shadow: 0px 0px 15px #efefef;
  padding: 20px;
}

.about-description::after {
  border-radius: 20px;
  content: ' ';
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: -1 !important;
  width: 100%;
  height: 100%;
  padding: 20px;
  /*background: radial-gradient(circle, rgba(0, 0, 0, 0.905) 0%, rgba(240, 187, 187, 0) 100%);*/
  background: linear-gradient(to left , transparent,rgb(255, 255, 255),transparent);
  background-size: 200%;
  background-position: center;
}

.title-btn {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.title-btn button {
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  border: 0px solid transparent;
  background: linear-gradient(to right, rgb(9, 166, 244), rgba(250, 48, 172, 0.959), rgba(250, 25, 171, 0.959), rgba(25, 182, 250, 0.959));
  background-size: 200% 100%;
  box-shadow: 0 4px 15px 0 rgba(243, 47, 194, 0.75);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.title-btn button:hover {

  background-position: 100% 0;
  box-shadow: 5px 5px 15px 10px rgba(78, 156, 152, 0.75);
}

.title-btn a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
}

.discounts{
  background: linear-gradient(360deg, #b9deed, #efefef)
}
.discounts h2{
  margin-top: 0;
  text-align: center;
  padding-top: 20px;
  font-size: 1.8rem;
}
.discounts-cards-container{
  display: flex;
  width: 100%;
  
}
</style>