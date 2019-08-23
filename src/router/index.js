import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from '@/example/home';

const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
    },
];

const createRouter = () => new VueRouter({
    routes: constantRoutes,
});

const router = createRouter();

export const resetRouter = () => {
    const newRouter = createRouter();
    newRouter.matcher = router.matcher;
};

export default router;
