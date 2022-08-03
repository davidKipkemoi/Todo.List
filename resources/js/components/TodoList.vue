<template>
<div class="todolistContainer">
    <div class="heading">
        <h2 id="title"> Add Your Way!!!!</h2>
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
width: 350px;
margin: auto;
}
.heading{
    background: rgb(18, 17, 17);
    padding: 10px;
}
#title{
    text-align: center;
}
</style>
