import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Life from '../views/Life.vue'
import Study from '../views/Study.vue'
import Game from '../views/Game.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Content from '../views/Content.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/life',
        name: 'Life',
        component: Life
    },
    {
        path: '/study',
        name: 'Study',
        component: Study
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/content/:blogId',
        name: 'Content',
        component: Content
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router