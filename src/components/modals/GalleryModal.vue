<template>
    <div @click="closeModal" class="gallery-modal" v-if="item!='undefined'">
        <img v-if="item.type=='img'" @click="nothing" :src="require(`../../assets/images/gallery/` + item.src)" alt="">

        <video v-else @click="nothing" autoplay="autoplay" loop controls muted preload="auto">
            <source :src="require(`../../assets/images/gallery/` + item.src)" type="video/mp4">
        </video>
    </div>
</template>

<script>

export default {
    name: 'GalleryModal',
    props: ['item'],
    data(){
        return{
            modalState: true
        }
    },
    methods: {
        closeModal() {
            this.modalState = false;
        },
        nothing(e) {
            e.stopPropagation();
        }
    },
    watch:{
        // eslint-disable-next-line
        modalState(newValue, oldValue){
            if(!newValue) {
                this.$emit('onCloseModal');
            }
            
        }
    },
    mounted() {
        window.addEventListener('keyup', (e)=>{
            if(e.key == 'Escape') {
                this.modalState = false;
            }
        })
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.704);
    z-index: 20;
    cursor: no-drop;
}

.gallery-modal img,
.gallery-modal video {
    height: 90%;
    border-radius: 20px;
    cursor: default;
    z-index: 50 !important;

}
</style>
  