<template>
<div class ="addItem">
    <input type="text" v-model="item.name"/>
    <button
        @click="addItem()"
        :class="[item.name ? 'active' :'inactive']">
        Add List
    </button>


</div>
</template>
<script>




export default{
    data: function (){
        return {
        item:{
                name:""

            }
        }
    },
    methods:{
        addItem(){
            if(this.item.name ==""){
                return;
            }
            axios.post('api/item/store',{
                item:this.item
            })
            .then(response=> {
                if(response.status==201){
                    this.item.name=""
                    this.$emit('reloadList');
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
.addItem{
    display: flex;
}
.plus{
    font-size: 50px;
    color: rgb(255, 0, 0);
}
.active{
    color: rgb(255, 0, 0);
}
.inactive{
    color: rgb(255, 254, 254);
}



</style>

