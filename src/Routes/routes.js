import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import CreateProfile from '../components/CreateProfile.vue'
import login from '../components/Layout/LoginPage.vue'
import ParentComponent from '../components/ParentComponent.vue'
import ChildComponent from '../components/ChildComponent.vue'
import BasicCrud from '../components/BasicCrud.vue'
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
    },
    {
        name: 'BasicCrud',
        path: '/crud',
        component: BasicCrud
    },
    {
        name: 'ChildComponent',
        path: '/child',
        component: ChildComponent
    },
    {
        name: 'ParentComponent',
        path: '/parent',
        component: ParentComponent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;