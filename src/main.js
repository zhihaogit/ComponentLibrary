import Vue from 'vue';
import router from '@/router';
import App from './App.vue';
import Layout from '@/components/layout';
import AutoComplete from '@/packages/autocomplete';

Vue.config.productionTip = false;
Vue.component(Layout.name, Layout);
Vue.use(AutoComplete);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
