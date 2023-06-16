<template>
    <div class="container">
        <img class="item-image" :src="require(`../assets/images/products/` + itemInfo.images[0])" alt="">

        <div class="item-description">
            <div class="item-text">
                <p class="item-name">{{ itemInfo.name }}</p>

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
        }
    },
    computed: {
        itemInfo() {
            return this.$store.getters.getProductById(this.item.id);
        }
    },
    mounted() {

    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: calc(100% - 20px);
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
</style>
  