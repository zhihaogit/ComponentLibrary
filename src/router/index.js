import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from '@/example/home';
import AutoComplete from '@/example/autocomplete';

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
    {
        path: '/autocomplete',
        name: 'autocomplete',
        component: AutoComplete,
    },
    {
        path: '*',
        redirect: '/home',
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
