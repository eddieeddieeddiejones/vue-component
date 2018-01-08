<template>
<button class="mybutton"
  :class="[type ? 'my-button-' + type : '']"
  @click="handleClick">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.mybutton {
  padding: 10px 15px;
  /*display: inline-block;*/
  border-radius: 3px;
  outline: none;
  background-color: transparent;
  border: 1px solid #c4c4c4;
  margin-left: 10px;
}
.my-button-primary {
  color: #fff;
  background-color: #20a0ff;
  border-color: #20a0ff;
}
.my-button-primary:hover {
  color: #fff;
  background-color: #20a0ff;
  border-color: #20a0ff;
  opacity: 0.7
}
.my-button-primary:active {
  background-color: #20a0ff;
  border-color: #20a0ff;
  opacity: 0.6
}

.my-button-default:hover {
  border-color: #20a0ff;
  color: #20a0ff;
}
.my-button-default:active {
  border-color: #20a0ff;
  color: #20a0ff;
  opacity: 0.6
}
</style>