<script setup lang='ts'>
import  CounterView   from "./CounterView.vue";
import { ref,defineProps } from "vue"
const props=defineProps({
    arrList:{
        type:Array,
        default:[] || null
    }
})

</script>
<!-- div中文会自动换行，英文不会，使用word-break断句 -->
<template>
    <div class="good"> 
        <div class="good-deatil" v-for="(item,i) in props.arrList" :key="i">
            <input type="checkbox">
            <div class="good-img">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="good-desc">
                <div class="good-name">
                    <span>{{ item.name }}</span>
                </div>
                <div class="good-sum">
                    <div class="good-price">{{ item.price }}</div>
                    <div class="good-count">
                        <CounterView></CounterView>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import '@/assets/style/public.styl'
.good 
    margin:0 auto;  
    volume(98%,auto)  
    .good-deatil
        volume(100%,90px) 
        padding:10px 5px;
        box-sizing:border-box;
        border-bottom: 1px solid #ccc;
        flex(row,space-between,center,left)
        input[type=checkbox]
         cursor:pointer;
        .good-img
         volume(80px,70px)
         background-color:green;
        .good-desc 
         volume(212px,70px)
         overflow:hidden;
         flex(column,space-between,'','') 
         .good-name
            volume(200px,38px)
            word-break:break-word;
            more-text-hidden(2)
            fonts(16px,400,#000)
         .good-sum
            flex(row,space-between,center,'')
            .good-price
             fonts(14px,600,red)
img
 volume(100%,100%)
</style>