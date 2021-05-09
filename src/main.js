import { createApp } from 'vue';
import Vue from 'vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import App from './App.vue';
import axios from 'axios';

Vue.prototype.$http = axios;
// window.axios=require('axios');
const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
