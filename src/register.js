import Vue from 'vue'
import page from './components/page'
import Dialog from './components/dialog'
import MyButton from './components/button'
import SliderCover from './components/slider'

var components = [
  page,
  Dialog,
  MyButton,
  SliderCover
]

components.forEach(item => {
  Vue.use(item)
})

