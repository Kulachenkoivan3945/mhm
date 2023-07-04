<template>
    <section @click="changeState" ref="activityCard" class="activity-container">
        <h3>{{ activityInfo.title }}</h3>

        <div class="activity-content" ref="activityContent">
            <img v-if="activityInfo.content[0].type == 'img'" class="card-image"
                :src="require(`../assets/images/products/` + activityInfo.content[0].src)" alt="">

            <video v-else class="card-image" autoplay="autoplay" loop controls muted preload="auto">
                <source :src="require(`../assets/images/products/` + activityInfo.content[0].src)" type="video/mp4">
            </video>
        </div>

        <img v-if="!isShowed" class="arrow-img" src="../assets/images/icons/arrow-to-bottom.png" alt="">
        <div ref="activityCardContent" class="activity-card-content">
            <p>{{ activityInfo.description }}</p>
        </div>
    </section>
</template>

<script>

export default {
    name: 'ActivityCard',
    props: ['activityInfo'],
    data() {
        return {
            isShowed: false
        }
    },
    methods: {
        changeState(){
            if(this.isShowed) this.close();
            else this.show();
        },
        show() {
            this.isShowed = true;
            this.$refs.activityCard.style.height = 50 +
                this.$refs.activityContent.clientHeight +
                this.$refs.activityCardContent.offsetHeight + 'px';
            clearTimeout();
            this.$emit('onShowed', this.$refs.activityCard.offsetHeight);
        },
        close() {
            this.$refs.activityCard.style.height = 100 + this.$refs.activityContent.clientHeight + 'px'
            setTimeout(() => this.isShowed = false, 200);
        }
    },
    mounted() {
        setTimeout(() => {
            this.$refs.activityCard.style.height = 100 + this.$refs.activityContent.clientHeight + 'px';
        },200)
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activity-container {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.859);
    border: 1px solid white;
    padding: 20px;
    border-radius: 10px;
    height: 100px;
    overflow: hidden;
    transition: 0.7s all ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

}

.activity-container:hover {
    overflow: none;
}

.activity-content img,
.activity-content video {
    max-width: 20vw;
    margin-top: 30px;
    border-radius: 10px;
    min-width: 20vw;
    object-fit: cover;
}

.activity-content {
    border-radius: 10px;
}

.arrow-img {
    margin-top: 20px;
    height: 35px;
}

p,
h3 {
    color: rgb(18, 2, 43);
    white-space: pre-line;
    line-height: 1.3rem;
}

h3 {
    margin: 0;
    text-align: center;
}

@media(max-width:1050px){
    .card-image{
        max-width: none !important;
        max-height: 50vh;
    }
}

@media(max-width:800px){
    .activity-content{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-image{
        max-width: 100% !important;
    }
}

@media(max-width:450px){
    .activity-content{
        width: 95%;
    }
}

</style>
  