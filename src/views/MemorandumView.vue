<script setup lang='ts'> 
import { ref,reactive } from "vue";
// 知识点  
    /*
        input 获取最新值 @input= e.currentTarget.value
        根据数组坐标，只获取数组一个或多个元素 arr.value.splice(坐标，1 or ……)
        
    */
// reactive简单类型不推荐
// type meauListType = {
//     text:string,
//     id:string
// }
// interface dataType {
//     arrList:meauListType[]
// }
//  const data:dataType = reactive({
//     arrList:[]
//  }) 
let inputValue = ref<string>('')
// const arrList = ref<meauListType[]>([])
const arrList = ref<any>([])
 const handlerInput = () =>{   
    arrList.value.push(inputValue.value)
    inputValue.value=''
    // reactive简单类型不推荐  data.arrList.push(...val)
 }

 const getInputValue = (item:string,e:any,i:number) => { 
    arrList.value[i] = e.currentTarget.value.substring(2, e.currentTarget.value.length)
 }
 const deleteItem =(i:number)=>{ 
    arrList.value.splice(i, 1)
 }
 const deleteInputContent =()=>{
    inputValue.value = ''
 }
 
</script>
<template>
    <div>
        <div class="memorandu">
            <div class="headerinput">
                <input type="text" v-model="inputValue" placeholder="在此输入" @keyup.enter="handlerInput">
                <span class="del" v-if="inputValue.length !=0" @click="deleteInputContent">x</span>
            </div>
            <div class="content"> 
                <div class="text-item" v-for="(item,i) in arrList" :key="i">
                    <input type="text" class="text-input" :value="`${i+1}.${item}`" @input="getInputValue(item,$event,i)">
                <span class="del" @click="deleteItem(i)">x</span> 
                </div> 
            </div>
        </div>
    </div>
</template>

<style scoped lang="stylus">
@import '../assets/style/public.styl'

input[type=text]:focus 
   outline:none
input 
   border:0;
   background:transparent; 
.memorandu
 volume(400px,700px)
 background-bg('../image/text-bg.png','center -2px',cover) 
 margin:50px auto 0;
 padding:100px 40px 0;
 box-sizing:border-box;
 .headerinput 
   volume(250px,auto)
   position:relative;
   font-size:16px;
   margin-bottom:20px; 
   & input  
     padding:5px 30px 5px 0;
     box-sizing:border-box;
     border-bottom:1px solid #000;
    .del
     position:absolute;
     right:30px;
     cursor:pointer;
     top:5px;
.content
 volume(100%,500px) 
 .text-item
  position:relative;
  volume(90%,auto)
  border-bottom:1px solid #000;
  margin:0 0 10px 25px;
  padding:5px 30px 5px 10px;
  box-sizing:border-box;
  text-align:left;
  .text-input
    volume(360px,'')
  .del
    position:absolute;
    right:10px;
    top:5px;
    cursor:pointer;
</style>