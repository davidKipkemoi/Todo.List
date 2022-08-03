<template>
<div class ="addItem">
    <input type="text"/>

    <font-awesome-icon
        :icon ="faPlusSquare"
        @click="addItem()"
        :class="[item.name ? 'active' :'inactive', 'plus']"/>


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
    background: rgb(0, 255, 13);
    border:0px ;
    outline: none;
    padding: 5px ;
    margin-right:10px ;
    width: 100%;

}
.plus{
    font-size: 50px;
    color: black;
}
.active{
    color: rgb(226, 226, 12);
}
.inactive{
    color: rgb(62, 38, 221);
}

</style>

