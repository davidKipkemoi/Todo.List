<template>
<div>
    <div v-for="(item,index) in items" :key="index">
        <list-item
            :item="item"
            class="item"
            />
</div>
    </div>
</template>
<script>
import ListItem from "./ListItem.vue";

export default{
    props:['items'],
    components:{
        ListItem
    }
}
</script>
<style scoped>
.item{
    background: white;
    padding: 5px;
    margin-top:5px;
}

</style>
