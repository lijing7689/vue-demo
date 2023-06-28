<script setup lang='ts'>
    import {  defineProps , defineEmits } from 'vue'
    // 定义props方法一  取值：props.title
    const props = defineProps({
        title:{
            type:String,
            default:''
        }
    })
    // 定义props方法二  Props.title
    // type Props = {
    //     tilte:string
    // }
    // defineProps<Props>()
</script>
<template>
    <div class="header">
           <div class="header-title">{{  props.title }}</div>
    </div>
</template>
<style lang="stylus" scoped> 
@import '@/assets/style/public.styl';
.header
    volume(100%,45px)
    background-color:#0350C2;
    .header-title
     color:#fff;
     line-height:45px;
</style>