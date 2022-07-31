require('./bootstrap');

import { createApp} from 'vue'
import TodoList from './components/TodoList.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSquarePlus, faTrash)
createApp(TodoList).component ('font-awesome-icon',FontAwesomeIcon)
s


const app = createApp({

})

app.component('app-component',TodoList)
app.mount('#app')
