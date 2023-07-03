<script setup lang='ts'>
import { ref,defineProps,defineEmits, watch } from 'vue'
let count = ref<number>(0)
const props = defineProps({
    countItem:{
        type:Object,
        default:{}
    }
})
watch(()=> props.countItem,()=>{
    count.value = props.countItem.count
},{
    immediate:true
})
// 多个emit
// const emits = defineEmits(['countPlus','countMinus'])
// emits('countPlus',{
//     // data:
// })
// 单个emit
const emit = defineEmits<{
    (event:'countPlus',val:object):void
}>()



const handerPlus = () => {
    count.value ++
    emit('countPlus',{...props.countItem})
}
</script>
<template>
    <div class="counter">
        <div class="main-content">
            <div class="minus">-</div>
            <div class="count">{{ count }}</div>
            <div class="plus"  @click="handerPlus">+</div>
         </div>
    </div>
</template>
<style lang='stylus' scoped>
@import '@/assets/style/public.styl'
.counter
  volume(auto,30px) 
  .main-content
   line-height:30px;
   flex(row,space-between,center,center)
   .plus,.minus
    volume-line(20px,20px,20px)
    color:#fff;
    background:#ccc;
    cursor:pointer;
   .count
    padding:0 5px;
</style>                