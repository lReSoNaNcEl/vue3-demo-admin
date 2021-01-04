import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/pages/admin/index.vue'),
    },
    {
        path: '/admin/login',
        name: 'admin/login',
        component: () => import('@/pages/admin/login/index.vue')
    },
    {
        path: '/admin/users',
        name: 'admin/users',
        component: () => import('@/pages/admin/users/index.vue')
    },
    {
        path: '/admin/posts',
        name: 'admin/posts',
        component: () => import('@/pages/admin/posts/index.vue'),
    },
    {
        path: '/admin/posts/:id',
        name: 'admin/posts/id',
        component: () => import('@/pages/admin/posts/_id/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
