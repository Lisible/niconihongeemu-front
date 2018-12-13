export default {
	name: 'login',
	data: function () { 
		return {
			login: '',
			password: '',
		}
	},
	methods: {
		triggerConnectionRequest: function(event){
			this.$parent.$emit('ConnectionRequest', this.login, this.password);
		}
	}
}