<template>
    <section class="feedback-container">
        <div class="feedback-meta">
            <div class="user-logo">
                <img src="../assets/images/icons/empty-photo.jpg" alt="">
            </div>
            <p>
                {{ feedbackCardInfo.name }}
                <span>{{ feedbackCardInfo.date }}</span>
            </p>
        </div>
        <div class="feedback-content">
            <div class="feedback-text">
                <p>{{ feedbackCardInfo.text }}</p>
            </div>
            <div class="feedback-images">
                <img v-for="image in feedbackCardInfo.content" :key="image" 
                @click="openModal(image)"
                    :src="require(`../assets/images/products/` + image.src)" alt="">
            </div>
        </div>
        <transition name="modal-fade">
            <GalleryModal v-if="modalState"
             @onCloseModal="closeModal" 
             :item="modalItem"></GalleryModal>
        </transition>

    </section>
</template>

<script>
import GalleryModal from '@/components/modals/GalleryModal.vue'

export default {
    name: 'FeedbackCard',
    components: {
        GalleryModal
    },
    props: ['feedbackCardInfo'],
    data() {
        return {
            modalState: false,
            modalItem: ''
        }
    },
    methods: {
        openModal(item) {
            this.modalItem = item;
            this.modalState = true;
            console.log(item.type)
        },
        closeModal() {
            this.modalState = false;
        }
    },
    mounted() {
        
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feedback-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 40px 20px 40px;
    
}

.feedback-meta{
    display: flex;
}
.feedback-meta p{
    font-weight: bold;
}
.feedback-meta span{
    font-weight: normal;
    margin-left: 30px;
    font-size: 0.9rem;
    color: gray;
}
.user-logo img {
    width: 70px;
    object-fit: cover;
    object-position: center;
    height: 70px;
    border-radius: 50%;
    margin-right: 30px;
}

.feedback-text p{
    white-space: pre-line;
    line-height: 1.5rem;
}

.feedback-images img {
    padding-top: 20px;
    cursor: pointer;
    width: 70px;
    margin-right: 10px;
    border-radius: 5px;
}

@media (max-width:450px) {
    .user-logo img{
        height: 50px;
        width: 50px;
        margin-right: 15px;
    }

    .feedback-container{
        padding-left: 15px;
        padding-right: 15px;
    }
    .feedback-meta span{
        margin-left: 5px;
    }
}

@media (max-width:320px) {
    .feedback-images img{
        width: 60px;
        margin-right: 5px;
    }
}
</style>
  