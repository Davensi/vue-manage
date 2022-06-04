import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('@/views/home/Home.vue');
// const User = () => import('@/views/user/User.vue');
const Mall = () => import('@/views/mall/Mall.vue');
const PageTwo = () => import('@/views/other/PageTwo.vue');
const PageOne = () => import('@/views/other/PageOne.vue');
const Min = () => import('@/views/Min.vue');
// 注册路由插件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: "/index"
    },
    {
        path: '/index',
        name: 'index',
        component: Min,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('../views/user/Profile.vue'),
            },
            {
                path: 'mall',
                name: 'mall',
                component: Mall,
            },
            {
                path: '/page1',
                name: 'pag1',
                component: PageOne,
            },
            {
                path: '/page2',
                name: 'pag2',
                component: PageTwo,
            },
        ]

    },

]

const router = new VueRouter({
    routes
})

export default router
