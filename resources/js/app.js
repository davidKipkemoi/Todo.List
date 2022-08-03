require('./bootstrap');

import { createApp} from 'vue'
import TodoList from './components/TodoList'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
createApp().component('fontawesome', FontAwesomeIcon)

library.add(faPlusSquare, faTrash)

const app = createApp({

})

app.component('app-component',TodoList)
app.mount('#app')
