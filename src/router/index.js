import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const constantRoutes = [];

const createRouter = () => new VueRouter({
    routes: constantRoutes,
});

const router = createRouter();

export const resetRouter = () => {
    const newRouter = createRouter();
    newRouter.matcher = router.matcher;
};

export default router;
