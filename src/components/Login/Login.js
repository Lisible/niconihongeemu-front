export default {
	name: 'login',
	data: function () { 
		return {
			login: '',
			password: '',
		}
	},
	methods: {
		triggerAccountCreationRequest: function(event){
			this.$parent.$emit('AccountCreationRequest');
		},
		triggerConnectionRequest: function(event){
			this.$parent.$emit('ConnectionRequest', this.login, this.password);
		}
	}
}