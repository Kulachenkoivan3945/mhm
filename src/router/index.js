import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductCardView from '../views/ProductCardView.vue'
import CartView from '../views/CartView.vue'

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
        path: '/products/:id',
        name: 'product-card',
        component: ProductCardView
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: CartView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router