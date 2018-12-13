export default {
	name: 'register',
	data: function () { 
		return {}
	},
	methods: {
		triggerAccountCreationRequest: function(event){
			this.$parent.$emit('AccountCreationRequest');
		}
	}
};