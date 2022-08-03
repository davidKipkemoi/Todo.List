require('./bootstrap');

import {createApp} from 'vue'
import TodoList from './components/TodoList'
import addItemForm from './components/addItemForm.vue'



import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusSquare, faTrash)
createApp(TodoList,addItemForm).component('font-awesome-icon',FontAwesomeIcon)

const app = createApp({


})

app.component('app-component',TodoList)
app.mount('#app')
