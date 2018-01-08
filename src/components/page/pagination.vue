<template>
<div class="page">
  <span class="pre" @click="clickPre"><</span>
  <ul class="num clearfix">
    <li v-for="item in numList"
      :class="{'active': item === currentNum}"
      @click="clickNum(item)">{{ item }}</li>
  </ul>
  <span class="next" @click="clickNext">></span>
</div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      default: 1
    }, 
    numChange: {
      type: Function
    }
  },
  data () {
    return {
      numList: [],
      // showRange: 5
      displayLimit: 5,
      currentNum: this.current
    }
  },
  methods: {
    clickNum (index) {
      this.setCurrent(index)
    },
    setCurrent (index) {
      if (index < 1 || index > this.total) return
      let arr = []
      for (let i = 1; i <= this.total; i ++) {
        arr.push(i)
      }

      const ave = Math.floor(this.displayLimit / 2)
      const tempStart = index - 1 - ave
      const tempEnd = index - 1 + (this.displayLimit - ave)
      let start = tempStart >= 0 ? tempStart : 0
      let end = tempEnd < this.total ? tempEnd : this.total
      if (tempStart < 0) {
        end = this.displayLimit
      }
      if (tempEnd >= this.total) {
        start = this.total - this.displayLimit
      }

      this.numList = arr.slice(start, end)
      this.currentNum = index
      this.numChange(index)
    },
    clickPre () {
      const currentNum = this.currentNum - 1
      this.setCurrent(currentNum)
    },
    clickNext () {
      const currentNum = this.currentNum + 1
      this.setCurrent(currentNum)
    }
  },
  mounted () {
    this.setCurrent(1)
  }
}
</script>

<style>
/*公共样式开始*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  /*文字不可选中*/
  user-select: none;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
/*公共样式结束*/

.page {
  vertical-align: middle;
}
.page .pre {
  height: 25px;
  line-height: 25px;
  display: inline-block;
  float: left;
  width: 25px;
  height: 25px;
  /*border: 1px solid #ccc;*/
  text-align: center;
  margin-right: 15px;
  cursor: pointer;
}
.page .num {
  display: inline-block;
  margin: 0 0;
  padding-left: 0;
  float: left;
}
.page .num li {
  list-style: none;
  float: left;
  width: 40px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  /*border: 1px solid #ccc;*/
  margin-right: 5px;
  cursor: pointer;
}
.page .num li:hover {
  color: #409eff;
  /*background-color: red;*/
}
.page .num li.active {
  color: #409eff;
}
.page .next {
  height: 25px;
  line-height: 25px;
  display: inline-block;
  float: left;
  margin-left: 10px;
  width: 25px;
  height: 25px;
  /*border: 1px solid #ccc;*/
  text-align: center;
  cursor: pointer;
}
</style>