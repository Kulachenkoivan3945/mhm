<template>
    <div class="container" ref="cartItemContainer">
        <router-link :to="'/products/' + itemInfo.id">
            <img v-if="itemInfo.images[0].type=='img'"
            class="item-image" :src="require(`../assets/images/products/` + itemInfo.images[0].src)" alt="">

            <video v-else class="item-image" autoplay="autoplay" loop controls muted preload="auto">
                <source :src="require(`../assets/images/products/` + itemInfo.images[0].src)" type="video/mp4">
            </video>
        </router-link>

        <div class="item-description">
            <div class="item-text">
                <router-link :to="'/products/' + itemInfo.id">
                    <p class="item-name">{{ itemInfo.name }}</p>
                </router-link>
                <div class="price-block">
                    <p v-if="itemInfo.discountPrice" class="discount-price">
                        {{ itemInfo.discountPrice }}₽</p>
                    <p class="price" :class="{ 'old-price': itemInfo.discountPrice }">{{ itemInfo.price }}₽</p>
                </div>

            </div>
            <button class="delete-btn" @click="removeFromCart">
                <img src="../assets/images/icons/delete.png" alt="" class="delete-img">
                <span>убрать из корзины</span>
            </button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'CartItem',
    props: ['item'],
    methods: {
        removeFromCart() {
            this.$store.commit('removeFromCart', this.item.id);
            console.log(this.$refs.cartItemContainer.clientHeight);
            this.$emit('onDeleted',this.$refs.cartItemContainer.clientHeight);
        }
    },
    computed: {
        itemInfo() {
            return this.$store.getters.getProductById(this.item.id);
        }
    },
    mounted() {
        this.$emit('onMount',this.$refs.cartItemContainer.clientHeight);
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100%;
    display: flex;
    padding: 10px;
}

.item-description {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    justify-content: space-between;

}

.item-text a {
    text-decoration: none !important;
    color: rgb(21, 8, 137);
    padding-right: 20px;
}

.item-text {
    display: flex;
    padding-left: 30px;
    justify-content: space-between;
}

.item-image {
    width: 100px;
    border-radius: 10px;
}

.delete-img {
    width: 20px;
    height: 20px;
    padding-right: 5px;
}

.delete-btn {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    align-self: center;
    border-radius: 5px;
    border: 1px solid rgb(225, 225, 225);
    background-color: rgba(134, 134, 134, 0.068);
    cursor: pointer;
    transition: all 0.5s ease-in-out;

}

.delete-btn:hover {
    background-color: rgba(211, 6, 6, 0.768);
    color: white;
}

.price {
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
}

.old-price {
    text-decoration: line-through;
    margin-bottom: 5px;
    color: gray;
    font-size: 0.8rem;
    margin-left: 10px;

}

.price-block {
    display: flex;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    margin-right: 30px;
}

.discount-price {
    margin: 0px;
    font-weight: bold;
    color: red;

}

@media (max-width:550px) {
    .item-text{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .item-text a{
        padding-right: 0;
        width: 100%;
    }
    .delete-btn{
        width: 170px;
    }
}

@media (max-width:400px) {
    .delete-btn{
        flex-direction: column;
        width: 50px;
    }
    .delete-btn span{
        display: none;
    }
}
@media (max-width:320px) {
    .item-image{
        max-width: 80px;
    }
}
</style>
  