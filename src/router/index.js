
import {createRouter, createWebHistory} from "vue-router";

import Main from '../views/Main.vue'
import RemoteList from '../views/RemoteList.vue';

const routes = [
    {
        path: '/',
        name: Main,
        component: Main
    },
    {
        name: RemoteList,
        path: '/remote-list',
        component: RemoteList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
