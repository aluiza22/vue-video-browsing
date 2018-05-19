import Vue from 'vue';
import App from './App';

new Vue({
	
	render: h => h(App)
	/*el: '#app',
	render: function(createElement) {
		return createElement(App);
	}*/
}).$mount('#app');
