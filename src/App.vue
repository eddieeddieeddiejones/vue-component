<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>sdfsd</h1>
    <!-- 分页组件 -->
    <pagination :current="2" :total="10" :numChange="whenChange"></pagination>
    
    <div style="margin-bottom: 500px;"></div>

    <!-- 对话框组件 -->
    <my-dialog 
      :before-close="handleClose"
      :visible.sync="diaVisible">
      这是弹窗中的内容
      <div slot="footer">
        <my-button @click="diaVisible = false">取消</my-button>
        <my-button type="primary"  @click="diaVisible = false">确定</my-button>
      </div>
    </my-dialog>

    <!-- 图片轮播组件 -->
    <div class='slider'>
      <slider-cover :imgUrls="imgUrls"></slider-cover>
    </div>
  </div>
</template>

<script>
import imgUrls from './components/slider/slide.js'
// console.log(imgUrls)
export default {
  name: 'app',
  data () {
    return {
      // 对话框组件
      diaVisible: true,
      imgUrls: imgUrls
    }
  },
  methods:{
    // 分页组件
    whenChange(item){
      console.log(item)
    },

    // 对话框组件
    handleClose () {
      console.log('dialig close')
    }
  }
}
</script>
<style>
</style>