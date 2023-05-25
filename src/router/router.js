import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    // {path: '/expenses', component: }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;