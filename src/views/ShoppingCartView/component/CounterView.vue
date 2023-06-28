<script setup lang='ts'>
import { ref } from 'vue'
let count = ref<number>(1)
</script>
<template>
    <div class="counter">
        <div class="main-content">
            <div class="minus">-</div>
            <div class="count">{{ count }}</div>
            <div class="plus">+</div>
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