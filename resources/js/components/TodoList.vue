<template>
<div class="todolistContainer">
    <div class="heading">
        <h2 id="title"> TodoList Project</h2>
        <add-item-form/>
    </div>
    <list-view/>
</div>
</template>
<script>
import addItemForm from './addItemForm.vue'
import ListView from './ListView.vue'

export default{
    components:{
        addItemForm,
        ListView
    }
}
</script>
<style scoped>
.todolistContainer{
width: 750px;
margin: auto;
}
.heading{
    background: rgb(0, 0, 0);
    padding: 10px;
}
#title{
    text-align: center;
    color:azure ;
}
</style>
