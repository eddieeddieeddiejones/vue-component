import pagination from './pagination.vue'

pagination.install = function(Vue){
	Vue.component('pagination', pagination);
}

export default pagination