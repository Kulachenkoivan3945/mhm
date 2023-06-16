<template>
  <div id="contacts" class="contacts block-down move-block-down">
    <h2>Наши контакты</h2>
    <p class="contacts-center">Вы можете связаться с нами</p>
    <div class="contacts-links-container">
      <div class="contacts-phones contacts-links">
        <p>По телефону:</p>
        <a href="tel:+79370875793">+7 (937) 087-57-93</a>
      </div>
      <div class="contacts-emails contacts-links">
        <p>По электронной почте:</p>
        <a href="mailto:marusya.hmade@yandex.ru">marusya.hmade@yandex.ru</a>
      </div>
      <div class="contacts-social contacts-links">
        <p>Через социальные сети:</p>
        <div class="">
          <a href="">
            <img src="../assets/images/social/vk.png" alt="">
          </a>
          <a href="">
            <img class="contacts-social-telegramm" src="../assets/images/social/telegram.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPanel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
  margin-top: 0;
  border: 0px solid transparent;
  padding-top: 30px;
}

.contacts {
  background-image: url("../assets/images/general/footer-bg.jpg");
  background-size: cover;
  color: rgb(0, 0, 0);
  padding-bottom: 20px;
  font-size: 1.2rem;
}

.contacts p {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.contacts-links-container {
  display: flex;
  justify-content: space-around;
}

.contacts-links {
  display: flex;
  flex-direction: column;

}

.contacts-links a {
  text-decoration: none;
  color: rgb(32, 9, 186);

  cursor: pointer;
  padding-top: 10px;
  font-size: 1.3rem;
}

.contacts-social div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contacts-social a {
  padding: 0;
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
}

.contacts-social img{
  height: 40px;
  width: 40px;
}
.contacts-social-telegramm{
  width: 45px !important;
  height: 45px !important;
}
.contacts-social a:hover {
  transform: scale(1.1);
}

@media(max-width:800px) {
  .contacts-links-container img {
    width: 40px;
    height: 40px;
  }
  .contacts-links-container {
    flex-direction: column;
    align-items: center;
  }

  .contacts-links-container p {
    padding-bottom: 5px;
  }
}
</style>
