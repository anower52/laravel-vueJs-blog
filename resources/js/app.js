
require('./bootstrap');
window.Vue = require('vue');

//Support vueX
import Vuex from 'vuex'
Vue.use(Vuex)

import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)

//moment js
import {filter} from './filter'

//vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

// V-form
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

// Sweet alert 2
import Swal from 'sweetalert2'
import { format } from 'util';

window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })

window.Toast = Toast



const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'hash'
});

const app = new Vue({
    el: '#app',
    router,
    store
});
