<template>
<div class="todolistContainer">
    <div class="heading">
        <h2 id="title"> TodoList Project</h2>
        <add-item-form v-on:reloadList="getlist()"
        />
    </div>
    <list-view :items="items" v-on:reloadList="getlist()"
    />
</div>
</template>
<script>
import axios from 'axios'
import addItemForm from './addItemForm.vue'
import ListView from './ListView.vue'

export default{
    components:{
        addItemForm,
        ListView
    },
    data: function (){
        return{
            items:[]
        }
    },
    methods:{
        getlist(){
            axios.get('api/items')
            .then(response =>{
                this.items=response.data
            })
            .catch(error=>{
                console.log(error);
            })
        }
    },
    created(){
        this.getlist();
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
