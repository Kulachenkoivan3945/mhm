<template>
    <div>
        <img v-if="contentData.type == 'img'" class="card-image"
            :src="require(`../assets/images/products/` + contentData.src)" alt="">

        <video v-else class="card-image" autoplay="autoplay" loop controls muted preload="auto">
            <source :src="require(`../assets/images/products/` + contentData.src)" type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {
    name: 'imageContent',
    props: ['contentData']
}


</script>