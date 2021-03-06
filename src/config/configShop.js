export const firebaseLink = 'https://chilly-shop-default-rtdb.europe-west1.firebasedatabase.app/shopConfig.json'

export const nav = {
    header:  [
        {to: '/', value: 'Главная', exact: true},
        {to: '/shop', value: 'Товары', exact: false},
        {to: '/care', value: 'Уход', exact: false},
        {to: '/size', value: 'Размер', exact: false},
        {to: '/delivery', value: 'Доставка', exact: false},
        {to: '/about', value: 'О нас', exact: false}
    ],
    footer: [
        {to: '/', value: 'Главная', exact: true},
        {to: '/shop', value: 'Товары', exact: false},
        {to: '/care', value: 'Уход=', exact: false},
        {to: '/size', value: 'Размер', exact: false},
        {to: '/delivery', value: 'Доставка', exact: false},
        {to: '/order', value: 'Мои заказы', exact: false},
        {to: '/cart', value: 'Корзина', exact: false},
        {to: '/about', value: 'О нас', exact: false},
    ]
}