import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component : Welcome
    },
    {
        path: '/ad/:id',
        name: 'ad',
        component : () => import ('./views/Ads/Ad.vue')
    },
    {
        path: '/login',
        name: 'login',
        component : () => import ('./views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component : () => import ('./views/Users/Register.vue')
    },
    {
        path: '/profile/:id',
        name: 'profile',
        component : () => import ('./views/Users/Profile.vue')
    },
    {
        path: '/annonces/',
        name: 'annonces',
        component : () => import ('./views/Ads/Ads.vue')
    },
    {
        path: '/create-ad/',
        name: 'create-ad',
        component : () => import ('./views/Ads/CreateAd.vue')
    },
    ,
    {
        path: '/edit-ad/:id',
        name: 'edit-ad',
        component : () => import ('./views/Ads/EditAd.vue')
    },
    ,
    {
        path: '/categories/',
        name: 'categories',
        component : () => import ('./views/Categories/Categories.vue')
    },
    {
        path: '/messages/',
        name: 'messages',
        component : () => import ('./views/Messages/Messages.vue')
    },
    {
        path: '/assignations/',
        name: 'assignations',
        component : () => import ('./views/Assignations/Assignations.vue')
    },
    {
        path: '/conversation/ad=:adId&buyer=:buyerId',
        name: 'conversation',
        component : () => import ('./views/Messages/Conversation.vue'),
        props: true
    },
    {
        path: '/utilisateurs',
        name: 'users',
        component : () => import ('./views/Users/Users.vue')
    },

    {
        path: '/edit/:userId',
        name: 'edit',
        component : () => import ('./views/Users/EditUser.vue'),
        props: true
    },
];

const router = new Router({
    mode: 'history',
    routes:routes
})

export default router;
