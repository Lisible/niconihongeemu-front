import AuthenticationBackend from '@/model/Backend/AuthenticationBackend'

export default {
	name: 'register',
	data: function () { 
		return {
			login: '',
			password: '',
			statusMessage: ''
		}
	},
	methods: {
		onConfirmButtonClicked: async function(event){
			const response = await AuthenticationBackend.registerUser(this.login, this.password);
			if(response.status !== 200) {
				const content = await response.json();
				this.statusMessage = content.message;
				return;
			}

			this.$parent.changePerspective('login')
		}
	}
};