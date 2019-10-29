
require('./bootstrap');
window.Vue = require('vue');

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
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router
});
