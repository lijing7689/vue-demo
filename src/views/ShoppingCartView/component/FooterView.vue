<script setup lang='ts'></script>
<template>
    <div class="footer">
        <div class="main-content">
            <div class="select">
                <input type="checkbox" id="selectAll">
                <label for="selectAll">全选</label>
            </div>
            <div class="money">
                <span>合计：</span>
                <span class="price">￥1510.28</span>
            </div>
            <div class="close">
                <span>结算&nbsp;</span>
                <span>(7)</span>
            </div>
        </div>
    </div>
</template>
<style lang='stylus' scoped>
@import '@/assets/style/public.styl'
.footer
 volume-line(100%,60px,60px)
 padding:0 8px;
 background:#ddd;
 box-sizing:border-box; 
 .main-content 
  flex(row,space-between,center,center)
  .money .price
   fonts(16px,600,red)
  .close
   volume-line(100px,40px,40px)
   background:#3C86AC;
   border-radius:20px;
   fonts(14px,500,#fff)
</style>