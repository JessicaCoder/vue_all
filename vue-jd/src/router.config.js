import Home from './components/Home.vue'
import GoodsDetail from './components/GoodsDetail.vue'
import SearchPage from './components/SearchPage.vue'
import Category from './components/Category.vue'
import Find from './components/Find.vue'
import Cart from './components/Cart.vue'
import Mine from './components/Mine.vue'
import Login from './components/Login.vue'

export default [{
    path: '/home',
    component: Home
}, {
    path: '/search',
    component: SearchPage
}, {
    path: '/detail/:id',
    component: GoodsDetail 
}, {
    path:'/catgory',
    component:Category
}, {
    path:'/catgory/:id',
    component:Category
}, {
    path:'/find',
    component:Find
}, {
    path:'/cart',
    component:Cart
}, {
    path:'/mine',
    component:Mine
}, {
    path:'/login',
    component:Login
}, {
    path: '/',
    redirect: '/home'
}, {
    path: '*',
    redirect: '/home'
}]
