<template>
<div class="todolistContainer">
    <div class="heading">
        <h2 id="title"> Todo List</h2>
        <add-item-form/>
    </div>
    <list-view/>
</div>
</template>
<script>
import addItemForm from './addItemForm'
import ListView from './ListView'
export default{
    components:{
        addItemForm,
        ListView
    }
}
</script>
<style scoped>
.todolistContainer{
width: 350px;
margin: auto;
}
.heading{
    background: rgb(255, 0, 0);
    padding: 10px;
}
#title{
    text-align: center;
}
</style>
