import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsView
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: HomeView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router