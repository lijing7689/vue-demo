<script setup lang='ts'>
    import FooterView from "./component/FooterView.vue";
    import GoodView from "./component/GoodView.vue";
    import HeaderView from "./component/HeaderView.vue";
    import { ref } from "vue";
    const myTitle = ref<string>('购物车案例')
    interface listType  {
        name:string,
        price:number,
        count:number
    }
    let arrList = ref<listType[]>(
        [{name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1},
        {name:'1111111',price:198,count:1}])
</script>

<template>
    <div class="shoppingCart">
        <HeaderView :title="myTitle"></HeaderView>
        <div class="main-content"> 
            <GoodView :arrList="arrList"></GoodView>
        </div>
        <FooterView></FooterView>
    </div>
</template>
<style scoped lang="stylus">
@import '../../assets/style/public.styl'
.shoppingCart
    volume(375px,612px)
    border-radius:40px;
    overflow:hidden;
    flex(column,space-between,center,center) 
    margin:20px auto 0;     
    .main-content
     volume(100%,510px)
     overflow-y:scroll; 
</style>