<template>
<div class="slider">
  <div class="container" ref='container'>
    <img v-for="(item, index) in imgUrls" :src="item.smallPic" :srcset="`${item.bigPic} 2x`" alt="">
  </div>
  <div class="dot" ref="dot">
    <div class="wrapper clearfix">
      <span v-for="(item, index) in imgUrls" :class="{active: index === activeIndex}" @click="select(index)"></span>
<!--       <span></span>
      <span></span>
      <span></span>
      <span class="active"></span>
      <span></span> -->
    </div>
  </div> 
</div>
</template>

<script>
export default {
  props: {
    imgUrls: {
      type: Array,
      // 数组对象应该由工厂函数返回
      default: () => {[]}
    }
  },
  data () {
    return {
      activeIndex: 1
    }
  },
  mounted () {
    console.log(this.imgUrls)
    const container = this.$refs.container
    const dot = this.$refs.dot

    this.imgs = container.querySelectorAll('img')
    this.init()
    // console.log(1)
  },
  methods: {
    init () {
      let index = this.activeIndex
      const length = this.imgs.length
      const left = index - 1 >= 0 ? index - 1 : length - 1
      const right = index + 1 <= length -1 ? index + 1 : 0
      for (var i = 0; i < length; i ++) {
        var img = this.imgs[i]
        if (img.className) {
          // 在只有一个类名的前提下，才能这么写
          img.classList.remove(img.className)
        }
        switch (i) {
          case index:
            img.classList.add('active')
            break
          case left:
            img.classList.add('left')
            break
          case right:
            img.classList.add('right')
          default:
            break
        }
      }
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        let index = this.activeIndex + 1 <= length - 1 ? this.activeIndex + 1 : 0
        this.activeIndex = index
        this.init()
      }, 2000)
    },
    select (n) {
      this.activeIndex = n
      this.init()
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 868px;
    height: 352px;
    margin: 0 auto;
    position: relative;
  }
  .container img {
    width: 70%;
    position: absolute;
    left: 50%;
    margin-left: -35%;
    top: 37px;
    box-shadow: 0px 0px 50px 4px rgba(0,0,0,0.2);
    border-radius: 10px;
    transition: all 0.3s;
    opacity: 0;
    cursor: pointer;
  }
  .container img.active {
    z-index: 5;
    opacity: 1
  }
  .container img.right {
    z-index: 4;
    transform: translate3d(30%, 0, 0) scale(0.8);
    opacity: 1
  }
  .container img.left {
    z-index: 4;
    transform: translate3d(-30%, 0, 0) scale(0.8);
    opacity: 1
  }

  /* 点 */
  .dot {

  }
  .dot .wrapper {
    width: 120px;
    margin: 0 auto;
  }
  .dot .wrapper span {
    float: left;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f5f5f5;
    float: left;
    margin: 0 7px;
    cursor: pointer;
  }
  .dot .wrapper span.active {
    background-color: #d9d9d9;
  }
  .clearfix {
    clear: both;
    overflow: hidden;
  }
</style>