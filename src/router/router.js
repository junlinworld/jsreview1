import VueRouter from "vue-router";
import routes from '@/router/routes.js'
import Vue from 'vue'

const router = new VueRouter({
    routes
})


Vue.use(VueRouter);

export default router