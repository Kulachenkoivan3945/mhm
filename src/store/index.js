import { createStore } from 'vuex'

export default createStore({
    state: {
        allProducts: [{
                id: 0,
                name: 'Изящное колье из авантюрина',
                price: '1000',
                discountPrice: '700',
                images: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: 'диаметр колье 14,5 см, длина самого крупного сегмента 14 см,',
                composition: 'Натуральный авантюрин бусины 4мм, 8мм, 10мм, 12мм, 14 мм.',
                category: 'Украшения',
                subcategory: 'Колье',
                title: `Удивительно изящное но при этом массивное колье из авантюрина идеально для вечернего образа! Легкий изящный дизайн украшения позволяет в полной мере раскрыть природную красоту и благородство камня! Авантюрин был популярен в Древнем Египте и Китае, где камень относился к группе очень дорогостоящих и редких минералов. В стране восходящего солнца из авантюрина изготовили даже императорскую печать, чтобы династия правителя процветала, была плодородной на наследников и приносила пользу людям. Авантюрин с древних времен привлекал внимание магов и экстрасенсов, так как яркое мерцание этого самоцвета – не только необыкновенно красиво, но и имеет огромную магическую и лечебную силу. Считается что камень способен защитить человека от колдовства, зла и алчности, помогает очистить сознание человека от тяжелых тревожных мыслей, удерживает от неправильных поступков.`
            },
            {
                id: 2,
                name: 'Колье и серьги Аметист в этническом стиле',
                price: '2000',
                discountPrice: '',
                images: [
                    '2.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: `Колье диаметр обруча 15 см, длина 22 см. 
                Серьги длина 6,5 см, ширина 4 см.`,
                composition: 'Натуральные камни аместист 12 мм, 8 мм, 4 мм, обруч из нержавеющей стали, латунная проволока',
                category: 'Украшения',
                subcategory: 'Колье,Серьги',
                title: `Изящное колье и серьги к нему в этническом стиле подойдут и для бала и для романтического вечера! Магия камня всегда интересовала человечество, так считается что аметист наделяет энергией своего обладателя. Церковнослужители почитают минерал за способность очищать помыслы, даровать благоразумие и направлять мысли в правильное русло, способствует духовному развитию и самопознанию.`

            },
            {
                id: 3,
                name: 'Стильная джинсовая куртка для девушки',
                price: '2000',
                discountPrice: '',
                images: [
                    '3.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: '44',
                composition: '100% коттон',
                category: 'Одежда',
                subcategory: 'Куртки',
                title: `Яркий стильный рисунок "Код жизни" на спине сделал обычную джинсовую куртку атмосферной! Ваш образ просто притягивает взгляды!`

            },
            {
                id: 4,
                name: 'Браслет и серьги из уральского циркона',
                price: '2500',
                discountPrice: '',
                images: [
                    '4.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: 'Браслет длина 23 см (с возможностью регулировки), серьги длина 7 см.',
                composition: 'Уральский циркон бусины 12 мм и 10 мм',
                category: 'Украшения',
                subcategory: 'Браслеты,Серьги',
                title: `Яркие завораживающе мерцающие и переливающиеся уральские цирконы оформлены в стильные, подчеркивающие их красоту украшения! Циркон издревле известен своими позитивными свойствами как оберег от недоброжелателей, завистников, позволяющий выводить на чистую воду людей, которые хотят вас обмануть, камень усиливает харизму обладателя, делает его привлекательнее для окружающих. Помогает действовать в сложных ситуациях,`

            },
            {
                id: 5,
                name: 'Колье и серьги из натурального камня в этническом стиле',
                price: '2500',
                discountPrice: '500',
                images: [
                    '5.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: 'Колье длина 27 см, ширина 11,5 см. Серьги длина 8,5 см, ширина 6 см.',
                composition: 'Натуральные камни синий тигровый глаз, лазурит, латунная проволока',
                category: 'Украшения',
                subcategory: 'Колье,Серьги',
                title: `Яркий переливающийся тигровый глаз и глубокий синий лазурит создают удивительный образ! Изделия кажутся весьма массивными но очень удобны, серьги не тяжелые. Гармонично подобраны не только цветовые но и эзотерические сочетания камней в украшении. Лазурит придает решимости и уверенности в своих силах, толкает на исполнение собственных желаний. Синий тигровый глаз обладает успокаивающими свойствами. Этот самоцвет способствует развитию терпения, принятия и интуиции. Он помогает понимать окружающих и устанавливать с ними крепкую связь. Кроме того, этот красивый голубой минерал славится своей способностью сглаживать проблемные ситуации и снимать все виды напряжения.`

            },
            {
                id: 6,
                name: 'Женская футболка с пером Жар птицы!',
                price: '1000',
                discountPrice: '',
                images: [
                    '6.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: '46',
                composition: '100% хлопок',
                category: 'Одежда',
                subcategory: 'Футболки',
                title: `Золотое перо Жар птицы на обычной футболке прекрасное стилистически решение, позволяющее сделать неотразимым Ваш обычный образ!`

            },
            {
                id: 7,
                name: 'Колье и серьги "Ясно Солнышко"',
                price: '1000',
                discountPrice: '',
                images: [
                    '7.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: 'Колье и серьги "Ясно Солнышко"',
                composition: 'Бисер, латунная проволока',
                category: 'Украшения',
                subcategory: 'Колье,Серьги',
                title: `Колье и серьги "Ясно Солнышко"`

            },
            {
                id: 8,
                name: 'Яркое янтарной колье',
                price: '2000',
                discountPrice: '1500',
                images: [
                    '8.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: 'диаметр 24 см',
                composition: 'Натуральный скандинавский янтарь, натуральный рижский янтарь, латунная проволока',
                category: 'Украшения',
                subcategory: 'Колье',
                title: `Яркое янтарной колье`

            },
            {
                id: 9,
                name: 'Серьги и браслет "Синий тигровый глаз!',
                price: '2000',
                discountPrice: '800',
                images: [
                    '9.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: 'Браслеты длина 22 см, серьги длина 6,5 см. На браслете застежка магнитная с фиксатором, резинка.',
                composition: 'Натуральный камень Синий тигровый глаз 12, 8, 4 мм',
                category: 'Украшения',
                subcategory: 'Браслеты,Серьги',
                title: `Натуральный камень и лаконичный дизайн, подчеркивающий природную красоту! Эти изделия несомненно украсят любой образ! Синий тигровый глаз обладает успокаивающими свойствами. Этот самоцвет способствует развитию терпения, принятия и интуиции. Он помогает понимать окружающих и устанавливать с ними крепкую связь. Кроме того, этот красивый голубой минерал славится своей способностью сглаживать проблемные ситуации и снимать все виды напряжения.`

            },
            {
                id: 10,
                name: 'Мужские браслеты из натуральных камней',
                price: '1000',
                discountPrice: '400',
                images: [
                    '10.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                size: 'Длина 27 см',
                composition: 'Коричневый глазковый уральский агат, индийский коричневый и зеленый агат, яшма.',
                category: 'Украшения',
                subcategory: 'Браслеты',
                title: `Стильные лаконичные мужские браслеты на прочной резинке создадут законченность мужскому образу. Коричневый агат как нельзя лучше ассоциируется с земной стихией, которая связана с накоплением материальных благ. Поэтому камень кофейного цвета помогает своему владельцу накапливать финансы. Также он поможет в продвижении по карьерной лестнице.`

            },
            {
                id: 11,
                name: 'Колье и серьги из индийского агата',
                price: '2500',
                images: [
                    '11.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                discountPrice: '',
                size: 'диаметр колье 14,5 см, длина самого крупного сегмента 11 см, серьги длина 7 см',
                composition: 'Натуральный индийский агат, латунная проволока, нержавеющая сталь',
                category: 'Украшения',
                subcategory: 'Колье',
                title: `Колье и серьги из натурального индийского агата никого не оставят равнодушным! Очаровательно смотрятся как на повседневной темной футболке так и в вечернем образе! Бытует мнение что зеленый агат обладает успокаивающими свойствами, помогает очищать разум. На Востоке уверены, что камень – верный помощник при медитациях, способствует концентрации женской энергии Инь. На Западе же отмечают, что зеленый агат придает смелости и рассудительности. Также он поможет своему обладателю найти в окружении человека с плохими намерениями. Коричневый агат как нельзя лучше ассоциируется с земной стихией, которая связана с накоплением материальных благ. Поэтому камень кофейного цвета помогает своему владельцу накапливать финансы. Также он поможет в продвижении по карьерной лестнице.`

            },
            {
                id: 12,
                name: 'Браслет из опала и розового кварца',
                price: '1500',
                images: [
                    '12.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                discountPrice: '',
                size: 'Длина 20 см',
                composition: 'Натуральные камни опал 10, 4 мм, розовый кварц 12мм',
                category: 'Украшения',
                subcategory: 'Браслеты',
                title: `Стильный и романтичный браслет подойдет под любой образ! Опал и розовый кварц полупрозрачны, прекрасно играют на солнце! Магические свойства опала известны с древних времен. Наши далекие предки верили, что волшебный самоцвет способен копить человеческие эмоции. Именно поэтому его рекомендуют носить в удачные жизненные периоды. Магия розового кварца известна еще с античных времен, древние римляне и египтяне использовали его не только в качестве талисманов и оберегов, но и добавляли его в косметические средства для продления молодости и долголетия.`

            },
            {
                id: 13,
                name: 'Браслет из индийского агата',
                price: '1000',
                images: [
                    '13.jpg',
                    '2.jpg',
                    '3.jpg'
                ],
                discountPrice: '',
                size: 'длина 23 см',
                composition: 'натуральный индийский агат, нержавеющая сталь',
                category: 'Украшения',
                subcategory: 'Колье,Серьги',
                title: `Яркий браслет из индийского агата в этническом стиле украсит любой образ! идеально подойдет к колье и серьгам из агата! Бытует мнение что зеленый агат обладает успокаивающими свойствами, помогает очищать разум. На Востоке уверены, что камень – верный помощник при медитациях, способствует концентрации женской энергии Инь. На Западе же отмечают, что зеленый агат придает смелости и рассудительности. Также он поможет своему обладателю найти в окружении человека с плохими намерениями. Коричневый агат как нельзя лучше ассоциируется с земной стихией, которая связана с накоплением материальных благ. Поэтому камень кофейного цвета помогает своему владельцу накапливать финансы. Также он поможет в продвижении по карьерной лестнице.`

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

        },
        getSearchResults: state => searchQuery => {
            return state.allProducts.filter(product => product.name.toLowerCase().indexOf(searchQuery) >= 0);

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