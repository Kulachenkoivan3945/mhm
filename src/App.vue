<template>
  <div id="app">
    <header>
      <NavBar :pages="pages" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <FooterPanel />
    </footer>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import FooterPanel from '@/components/FooterPanel.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterPanel
  },
  data() {
    return {
      pages: [{
        name: 'Главная',
        path: '/',
        mark: 'home'
      }, {
        name: 'Товары',
        path: '/products',
        mark: 'products'
      },
      {
        name: 'Корзина',
        path: '/cart',
        mark: 'cart'
      },
      {
        name: 'Галерея',
        path: '/gallery',
        mark: 'gallery'
      }]
    }
  }
};
</script>
<style>
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat/static/Montserrat-Regular.ttf');
}
body {
  margin: 0;
  overflow-x: hidden;
  width: 100vw;
  max-width: 100vw;
}
main{
}
* {
  font-family: 'Montserrat';
  box-sizing: border-box;
}
li{
  list-style: none;
}
p {
  font-size: 1rem;
}

#app {
  width: 100vw;
  max-width: 100vw;
}

::-webkit-scrollbar {
  display: none;
}

@media(max-width:1000px) {
  html {
    font-size: 15px;
  }
}
</style>
