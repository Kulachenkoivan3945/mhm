
<template>
  <div class="gallery">
    <div class="gallery-container">
      <div v-for="item in galleryItems" :key="item" 
      @click="openModal(item)" 
      class="gallery-item">
        <img v-if="item.type == 'img'"
        :src="require(`../assets/images/gallery/` + item.src)" alt="">

        <video v-else 
        autoplay="autoplay" loop controls muted preload="auto">
          <source :src="require(`../assets/images/gallery/` + item.src)" type="video/mp4">
        </video>
      </div>
    </div>

    <transition name="modal-fade">
      <GalleryModal
      v-if="modalState"
      @onCloseModal="closeModal"
      :item="modalItem"></GalleryModal>
    </transition>

  </div>
</template>

<script>
// @ is an alias to /src
import GalleryModal from '@/components/modals/GalleryModal.vue'

export default {
  name: 'GalleryView',
  components:{
    GalleryModal
  },
  data() {
    return {
      galleryItems: this.$store.state.galleryItems,
      modalState: false,
      modalItem: {}
    }
  },
  methods: {
    openModal(item){
      this.modalItem=item;
      this.modalState = true;
    },
    closeModal(){
      this.modalState = false;
    }
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

.gallery-item {
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
}

.gallery-item:hover {
  box-shadow: 5px 5px 15px rgba(55, 55, 55, 0.937);

}

.gallery-item img , .gallery-item video {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.gallery-item video {
  outline: unset;
  object-fit: cover;

}

.modal-fade-leave-to, .modal-fade-enter-from{
  opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active{
  transition: all 0.5s ease-in-out;
}

</style>
