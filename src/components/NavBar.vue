<template>
    <nav class="header-big nav-block">
        <div class="logo">
            <img src="../assets/images/general/logo3.png" alt="">
        </div>
        <div class="nav-links-big">
            <ul>
                <li v-for="page in pages" :key="page">
                    <router-link :to="page.path"
                    :class="{active: currentTab===page.mark}"
                    >{{ page.name }}</router-link>
                </li>
            </ul>
        </div>

    </nav>

    <nav class="header-burger nav-block" :class="!burgerState ? 'burger-hidden' : ''">
        <div class="logo ">
            <img @click="changeBurgerState" :class="!burgerState ? 'logo-close' : ''"
                src="../assets/images/icons/burger-icon.png" alt="">
        </div>
        <div class="nav-links-burger" :class="!burgerState ? 'burger-close' : ''">
            <ul>
                <li v-for="page in pages" :key="page" @click="changeBurgerState">
                    <router-link :to="page.path"
                    @click="currentTab = page.name"
                    :class="{active: currentTab===page.name}"
                    >{{ page.name }}</router-link></li>
            </ul>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'NavBar',
    props: ['pages'],
    data() {
        return {
            burgerState: false,
        }
    },
    methods: {
        changeBurgerState() {
            this.burgerState = !this.burgerState;
        }
    },
    computed:{
        currentTab(){
            console.log(this.$store.state.activaPage);
            return this.$store.state.activaPage;
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.active{
    background-color: rgba(6, 6, 6, 0.053);
}
.logo img {
    height: 45px;
    transition: all 0.5s ease-in-out;
}

.nav-block {
    position: fixed;
    width: 100vw;
    z-index: 10;
    box-sizing: border-box;

}

a {
    color: black;
    text-decoration: none;
    font-size: 1.3rem;
}

.header-big {
    background-image: url("../assets/images/general/header-bg.jpg");
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

.header-big ul {
    display: flex;
    flex-direction: row;
    padding-left: 10vw;
}

ul{
    margin: 0 !important;
}
li {
    list-style: none;
}

.header-big a {
    height: 50px;
    display: block;
    text-align: center;
    display: flex;
    align-items: center;
    border: 3px solid transparent;
    padding: 0px 20px 0px 20px;
    transition: 0.5s all ease-in-out;
}

.header-big a:hover {
    border-bottom-color: rgb(183, 0, 255);
    background-color: rgb(235, 245, 254);
}

.header-burger {
    display: none;
}

.burger-hidden {}

@media(max-width:960px) {
    .logo {
        background-image: url("../assets/images/general/header-bg.jpg");
        z-index: 10 !important;
    }

    .logo img {
        
        padding: 10px 20px 10px 20px;
    }

    .header-big {
        display: none;
    }

    .logo-close {
        transform: rotate(180deg);
    }

    .burger-close {
        transform: translateX(-100%);
        z-index: -1;

    }

    .header-burger {
        display: flex;
        flex-direction: column;
        z-index: 10;
        height: 70px;
    }

    .header-burger a {}

    .nav-links-burger {
        background-color: rgb(252, 252, 252);
        display: flex;
        flex-direction: column;
        min-height: 100vh !important;
        transition: all 0.5s ease-in-out;
    }

    .nav-links-burger a {
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 20px;
        display: block;

    }

    .nav-links-burger a:hover {
        background-color: aliceblue;
    }

    .nav-links-burger li {
        border-bottom: 1px solid gray;
    }

    .nav-links-burger ul {
        padding: 0;
    }

}

@media(max-width:800px) {
    .logo {
        height: 60px;
    }

    .logo img {
        height: 40px !important;
    }
}

@media(max-width:500px) {
    .logo {
        height: 50px;
    }

    .logo img {
        height: 30px !important;
        padding: 10px;
    }
}
</style>
  