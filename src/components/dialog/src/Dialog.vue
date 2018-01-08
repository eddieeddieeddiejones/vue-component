<template>
<div class="dialog" v-show="visible">
  <div class="wrapper" @click.self="close">
    <div class="box" >
      <header class="clearfix title">
        <h3>提示</h3>
        <i class="iconfont icon-close" @click="close"></i>
      </header>
      <div class="body">
        <slot></slot>
      </div>
      </slot>
      <footer class="footer">
        <slot name="footer" v-if="$slots.footer">
        </slot>  
      </footer>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function
    }
  },
  watch: {
    visible () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose()
      }
    }
  },
  methods: {
    // 等价于
    // clickButton: function () {}
    clickButton () {
      console.log('1')
    },
    close () {
      console.log(1)
      this.$emit('update:visible', false)
    },
    haha () {
      console.log('haha')
    }
  }
}
</script>

<!-- 用的是阿里矢量图标：https://www.zhihu.com/question/25952487 -->
<style >
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_486789_zmfaelxiyvgkqpvi.eot?t=1511571788121'); /* IE9*/
    src: url('//at.alicdn.com/t/font_486789_zmfaelxiyvgkqpvi.eot?t=1511571788121#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAUIAAsAAAAAB3AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7kjTY21hcAAAAYAAAABeAAABhpzcBr5nbHlmAAAB4AAAATsAAAFcp5/RG2hlYWQAAAMcAAAALwAAADYPnQiOaGhlYQAAA0wAAAAcAAAAJAfeA4RobXR4AAADaAAAAAwAAAAMC+kAAGxvY2EAAAN0AAAACAAAAAgAdgCubWF4cAAAA3wAAAAfAAAAIAESAF1uYW1lAAADnAAAAUUAAAJtPlT+fXBvc3QAAATkAAAAIgAAADPJf+l+eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/sE4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDx7ydzwv4EhhrmBoQEozAiSAwA0pw1VeJzFkMENgDAMAy9t6QMxCA8G4sUcnbhSpygmlAcT1JJjxbGUKMACRPEQE9iF8eCUa+5HVveTZ7LUCJTaelf/qSKaZdegkpkGm7f6j83rPjp9hTKoE2t7SbgBqTUPMwAAeJwlj0tKw1AYhe+5MY8b28TepHmnTRrbKNWAMdaB2E4EURwIjhy6AJ124qATwYGCaxDBTXQxSrqOq6n+HP7B+f4Hh8iE/HxLS8kjFtkhB+SMXBMCZYyBQWOkeVXQMbqp3HVtQ8qzPFWzQSGdwh0otlNOqpGrqIoJAz0cpuUkL2iOo2pKT1A6MeCHwQ0fRlx6g+7lvSdxSd/R7WeROd0XF3szu0wsbd7i3Of8RVNkWaN0wzRw7zpMZroiPmQz6C77u7SPlp8HV7ftJOR3z9VDPHQZsFjAChPjc9YJOo0eA8fivrrV1rygnW3bmK82PasVj2rSFNZNOqdfJCSEYVIVUBlGBm0uKT2UxwzrSDlNEDPL10UtVnrAwRCLmoEHOqKGhJzhFdEfEXVjrIlYiVr3rf/RZrf59Avd5zcPAHicY2BkYGAA4uwPU63j+W2+MnCzMIDANbtHPgj6/0MWBmYJIJeDgQkkCgAy0gppAHicY2BkYGBu+N/AEMPCAAJAkpEBFTADAEcJAmwEAAAAA+kAAAQAAAAAAAAAAHYArnicY2BkYGBgZghkYGUAASYg5gJCBob/YD4DABD3AXAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAmZGJkZmRhYGxgjU5J784lYEBABHlArAAAA==') format('woff'),
    url('//at.alicdn.com/t/font_486789_zmfaelxiyvgkqpvi.ttf?t=1511571788121') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_486789_zmfaelxiyvgkqpvi.svg?t=1511571788121#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-close:before { content: "\e6e9"; }

</style>
<style>
/*公共样式开始*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  /*文字不可选中*/
  user-select: none;
  color: rgb(31, 45, 61);
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
/*公共样式结束*/

.dialog {
}

.dialog .wrapper {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.4);
  z-index: 1000;
}
.dialog .wrapper .box {
  width: 40%;
  min-height: 200px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  border-radius: 4px;
  padding: 20px;
  background: #fff;
  z-index: 2000;
}
.dialog .title {
  margin-top: -10px;
}
.dialog .title h3 {
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 18px;
  font-weight: 700;
}
.dialog .title .icon-close {
  float: right;
  font-size: 30px;
}
.dialog .title .icon-close:hover {
  color: rgb(32, 160, 255);
}

.dialog .box .body {
  margin-top: 20px;
  min-height: 75px;
}

.dialog .box .footer {
  margin-top: 20px;
  text-align: right;
}
</style>