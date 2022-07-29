<template>
<div class ="addItem">
    <input type ="text" v-model="item.name"/>
    <font-awesome-icon
        icon ="plus-square"
        :class="[item.name ? 'active' :'inactive', 'plus']" />
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
    }

}


</script>
<style scoped>
.addItem{
    display:flex;
    justify-content: center;
    align-items: center;

}
.input{
    background: white;
    border:0px ;
    outline: none;
    padding: 5px ;
    margin-right:10px ;
    width: 100%;

}
.plus{
    font-size: 20px;
}
.active{
    color: rgb(226, 226, 12);
}
.inactive{
    color: rgb(255, 0, 0);
}

</style>

