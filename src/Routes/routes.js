import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import CreateProfile from '../components/CreateProfile.vue'
import login from '../components/Layout/LoginPage.vue'
const routes = [
    {
        name: 'login',
        path: '/',
        component: login
    },
    {
        name: 'HelloWorld',
        path: '/home',
        component: HelloWorld
    },
    {
        name: 'CreateProfile',
        path: '/signup',
        component: CreateProfile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;