import MyButton from './src/MyButton.vue'

MyButton.install = function(Vue){
	Vue.component('my-button', MyButton);
}

export default MyButton