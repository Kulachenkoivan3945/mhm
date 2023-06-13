import { createStore } from 'vuex'

export default createStore({
    state: {
        allProducts: [{
                id: 0,
                name: 'Корзина гипсофил',
                price: '1000',
                discountPrice: '700',
                image: '1.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
            },
            {
                id: 2,
                name: 'Букет гипсофил',
                price: '2000',
                discountPrice: '1500',
                image: '2.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 3,
                name: 'Радужное облако из гипсофил',
                price: '4000',
                discountPrice: '3700',
                image: '3.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 4,
                name: 'Нежный букет роз',
                price: '1500',
                image: '4.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 5,
                name: 'Колье и серьги из натурального камня в этническом стиле',
                price: '1000',
                discountPrice: '500',
                image: '5.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 6,
                name: 'Букет цветов в теплых оттенках',
                price: '1000',
                image: '6.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 7,
                name: 'Букет',
                price: '1000',
                discountPrice: '700',
                image: '7.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 8,
                name: 'Букет',
                price: '1000',
                discountPrice: '500',
                image: '8.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 9,
                name: 'Букет',
                price: '1000',
                discountPrice: '800',
                image: '9.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 10,
                name: 'Букет',
                price: '1000',
                discountPrice: '400',
                image: '10.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 11,
                name: 'Букет',
                price: '1000',
                image: '11.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 12,
                name: 'Букет',
                price: '1000',
                image: '12.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            },
            {
                id: 13,
                name: 'Букет',
                price: '1000',
                image: '13.jpg',
                asideImages: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                title: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

            }

        ],
        productsInCart: [],
        discounts: [{
            title: `Дорогие друзья, мы рады сообщить вам об акции в нашем интернет магазине украшений! Только в течение следующих двух недель мы предоставляем скидки до 50% на большинство товаров в нашем ассортименте.
                
                Хотите украсить свой образ ярким и изысканным украшением? Можете смело выбирать из нашего большого выбора различных стилей, форм и цветов. Кольца, серьги, ожерелья и браслеты - все, что вам нужно для создания неповторимого образа.
                
                Не упустите шанс обновить свой гардероб на очень выгодных условиях! Акция продлится только две недели, поэтому торопитесь сделать свои покупки прямо сейчас. Мы гарантируем быструю и качественную доставку, а также отличный сервис.
                
                Закажите прямо сейчас и получите красивые украшения со скидкой до 50%! Мы ждем ваших заказов!`,
            products: [{
                    id: 0
                },
                {
                    id: 5
                },
                {
                    id: 8
                },
                {
                    id: 9
                },
                {
                    id: 10
                }
            ]
        }]
    },
    getters: {
        getProductById: state => id => {
            return state.allProducts.find(product => product.id === id);

        },
        getCountInCartById: state => id => {
            if (state.productsInCart.find(productInCart => productInCart.id === id)) {
                return state.productsInCart.find(productInCart => productInCart.id === id).count;
            } else return false

        }
    },
    mutations: {
        addToCart(state, id) {
            state.productsInCart.push({ id: id, count: 1 });

        },
        removeFromCart(state, id) {
            let product = state.productsInCart.find(productInCart => productInCart.id === id)
            if (product) {
                state.productsInCart.splice(state.productsInCart.findIndex(productInCart => productInCart.id === id), 1);
            }
        }
    },
    actions: {},
    modules: {}
})