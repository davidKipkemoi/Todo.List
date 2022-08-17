<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
            />
            <span :class="[item.completed ? 'completed':'','itemText']">{{item.name}}</span>
            <button
             @click="removeItem()" >
            </button>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    props:['item'],
    methods:{
        updateCheck(){
        axios.put('api/item/' +this.item.id,{
            item:this.item
        })
        .then(response=> {
            if(response.status=200){
                this.$emit('itemChanged');
            }
        })
        .catch(error=>{
            console.log(error);
             })
        },
        removeItem(){
            axios.delete('api/item/' +this.item.id,{
                item:this.item

            })
            .then(response=>{
                if(response.status=200){
                    this.$emit('itemChanged');
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
}


</script>
<style scoped>
.completed{
    text-decoration: line-through;
    color: rgb(0, 255, 68);
}
.itemText{
    width: 100%;
    margin-left: 20px;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan{
    background: white;
    border:none ;
    color: red;
    outline:none ;
}
.button{
    color:red;
    width: 20px;
    height: 20px;
}
</style>
