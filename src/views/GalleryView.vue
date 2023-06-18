
<template>
  <div class="gallery">
    <div class="gallery-container">
      <div v-for="item in galleryItems" :key="item" class="gallery-item">
        <img v-if="item.type=='img'" 
        :src="require(`../assets/images/gallery/` + item.src)" alt="">

        <video v-else autoplay="autoplay" loop>
          <source  :src="require(`../assets/images/gallery/` + item.src)" type="video/mp4">
        </video>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'GalleryView',
  data() {
    return {
      galleryItems: this.$store.state.galleryItems,
    }
  },
  methods: {

  },
  mounted() {
    this.$store.state.activaPage = 'gallery';
    window.scrollTo(0, 0)

  }
}
</script>

<style>
.gallery {
  padding: 100px 30px 80px 30px;
  /* background-image: url("../assets/images/mainPage/11.jpg");*/
  background-color: rgba(10, 122, 130, 0.133);
  background-size: cover;
  position: relative;
}

.gallery-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-auto-rows: 370px;
  justify-items: stretch;
  gap: 20px 20px;
}

.gallery-item{
  width: 100%;
  height: 100%;
}
.gallery-item img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.gallery-item video{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  outline: unset;
  object-fit: cover;
  
}
</style>
