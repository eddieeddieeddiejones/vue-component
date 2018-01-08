import Dialog from './src/Dialog.vue'

Dialog.install = function(Vue){
	Vue.component('my-dialog', Dialog);
}

export default Dialog