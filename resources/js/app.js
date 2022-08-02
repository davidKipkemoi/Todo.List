require('./bootstrap');

import { createApp} from 'vue'
import TodoList from './components/TodoList.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas)

createApp(TodoList)
.component('fa', FontAwesomeIcon)
.mount('#app')
