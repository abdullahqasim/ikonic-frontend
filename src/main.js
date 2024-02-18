import { createApp } from 'vue';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';
import router from './router.js';

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

AOS.init();

// Create the Vue app instance and pass the router as an option
const app = createApp(App);
app.use(router); // Use the router
app.component('QuillEditor', QuillEditor);
app.mount('#app');
