require('./bootstrap');

import {createApp} from 'vue'
import { createVuetify } from 'vuetify'

import TodoList from './components/TodoList'
import addItemForm from './components/addItemForm.vue'
import ListView from './components/ListView.vue'
import ListItem from './components/ListItem.vue'




import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusSquare, faTrash)
createApp(TodoList,addItemForm,ListItem,ListView).component('font-awesome-icon',FontAwesomeIcon)
const vuetify = createVuetify()
const app = createApp({})
app.use(vuetify)

app.component('app-component',TodoList)
app.mount('#app')
