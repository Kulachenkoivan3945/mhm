import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductCardView from '../views/ProductCardView.vue'
import CartView from '../views/CartView.vue'
import GalleryView from '../views/GalleryView.vue'

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
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: GalleryView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router