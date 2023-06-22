<template>
  <div class="home">

    <section class="about">
      <div class="about-description">
        <h1>Маруся Мастерова</h1>
        <h2>Уникальные украшения ручной работы для индивидуальности в каждой детали</h2>

        <p>Мы стремимся создавать не просто украшения, а маленькие произведения искусства, которые помогут подчеркнуть
          вашу индивидуальность и не оставят равнодушным никого из вашего окружения.</p>
        <div class="title-btn">
          <button>
            <router-link to="/products">Перейти к выбору</router-link>
          </button>
        </div>
      </div>
    </section>

    <section id="discounts" class="discounts ">
      <h2>Акции и скидки</h2>

      <div class="discounts-cards-container scroll-animated">
        <discountCard v-for="discount in discounts" :key="discount" :discount="discount" />
      </div>

    </section>
    <section class="activities " ref="activityContainer">
      <h2>Чем мы занимаемся</h2>
      <ul class="scroll-animated">
        <li v-for="activity in activities" :key="activity">
          <ActivityCard :activityInfo="activity"></ActivityCard>
        </li>
      </ul>
    </section>
    <section class="feedback">
      <h2>Отзывы о нас</h2>
      <ul>
        <li v-for="feedbackItem in showedFeedback" :key="feedbackItem" class="scroll-animated">
          <FeedbackCard :feedbackCardInfo="feedbackItem"></FeedbackCard>
        </li>
      </ul>

      <div v-if="showedFeedbackCount < feedback.length" class="feedback-show-more" ref="feedbackShowMoreBtn">
        <button @click="showMoreFeedback">Показать еще</button>
      </div>

<!--       <div class="feedback-show-more" ref="feedbackShowMoreBtn">
        <button @click="showMoreFeedback">Добавить отзыв</button>
      </div> -->
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import discountCard from '@/components/discountCard.vue'
import ActivityCard from '@/components/ActivityCard.vue'
import FeedbackCard from '@/components/FeedbackCard.vue'

export default {
  name: 'HomeView',
  components: {
    discountCard,
    ActivityCard,
    FeedbackCard
    //HelloWorld
  },
  data() {
    return {
      discounts: this.$store.state.discounts,
      activities: this.$store.state.homeActivities,
      feedback: this.$store.state.feedback,
      showedFeedbackCount: 2
    }
  },
  computed: {
    showedFeedback() {
      return this.feedback.slice(0, this.showedFeedbackCount);
    }
  },
  methods: {
    changeActivityHeight(n, isShowed) {
      if (isShowed) {
        this.$refs.activityContainer.style.height = this.$refs.activityContainer.clientHeight + n + 'px'
      }
    },
    showMoreFeedback() {
      this.showedFeedbackCount += 2;

      if (this.showedFeedbackCount < this.feedback.length) {
        setTimeout(() => this.$refs.feedbackShowMoreBtn.scrollIntoView({ block: 'end', behavior: 'smooth' }), 100);
      }


    }
  },
  mounted() {
    this.$store.state.activaPage = 'home';

    // Удалить CSS-класс square-transition
    function scrollAnimation() {
      var scrollAnimated = document.querySelectorAll(".scroll-animated");

      for (var i = 0; i < scrollAnimated.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = scrollAnimated[i].getBoundingClientRect().top;
        var elementVisible = 250;

        if (elementTop < windowHeight - elementVisible) {
          scrollAnimated[i].classList.add("animated-active");
        }
        else {
          scrollAnimated[i].classList.remove("animated-active");
          scrollAnimated[i].classList.add("animated-leave");
        }
      }
    }

    window.addEventListener("scroll", scrollAnimation);

  }
}
</script>

<style scoped>
.animated-leave {
  opacity: 0 !important;
  transform: translateY(-100px) !important;
}

.animated-active {
  opacity: 1 !important;
  transform: none !important;
}

.scroll-animated {
  opacity: 0;
  transform: translateY(150px);
  transition: all 1.3s ease-in-out;
}

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

.about-description h1 {
  color: rgb(60, 89, 149);
  text-align: center;
  letter-spacing: 1px;
  font-size: 2rem;
}

.about-description h2 {
  text-align: left;
  font-size: 1.2rem;
  padding-top: 0;
}

.about-description {

  position: relative;
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
  background: linear-gradient(to left, transparent, rgb(255, 255, 255), transparent);
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

.discounts {
  background: linear-gradient(360deg, #b9deed, #efefef);
}

h2 {
  margin-top: 0;
  text-align: center;
  padding-top: 20px;
  font-size: 1.8rem;
}

.discounts-cards-container {
  display: flex;
  width: 100%;
  padding-bottom: 40px;
}

.activities {
  padding-top: 20px;
  width: 100%;
  padding-bottom: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.156), transparent, transparent, transparent, transparent, transparent, rgba(255, 255, 255, 0.156));
  position: relative;
}

.activities::after {
  content: ' ';
  display: block;
  position: absolute;
  z-index: -1 !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: radial-gradient(circle, rgba(0, 0, 0, 0.905) 0%, rgba(240, 187, 187, 0) 100%);*/
  background-color: rgb(2, 2, 46);
}

.activities h2 {
  color: white;
}

.activities ul {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
}

.activities li {
  margin: 20px;
  flex-basis: 30%;
}

.feedback {
  width: 100%;
  padding-bottom: 50px;
  background-color: rgb(255, 255, 255);
}

.feedback ul {
  width: 100%;
  margin: 0;
  padding: 0;
}

.feedback li {
  margin: 20px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.156);
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.119);
}

.feedback li:nth-child(even) {
  background-color: #ffffff;

}

.feedback li:nth-child(odd) {
  background-color: #80d3f313;
}

.feedback-show-more {
  width: 100%;
  display: flex;
  justify-content: center;
}

.feedback-show-more button {
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

.feedback-show-more button:hover {
  background-color: #0c022c;
  color: white;
}
</style>