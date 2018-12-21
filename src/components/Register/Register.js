import AuthenticationAPI from '@/model/api/AuthenticationAPI'

export default {
	name: 'register',
	data: function () { 
		return {
			login: '',
			password: '',
			status: ''
		}
	},
	methods: {
		onConfirmButtonClicked: async function(event){
			const response = await AuthenticationAPI.registerUser(this.login, this.password);
			if(response.status !== 200) {
				const content = await response.json();
				this.status = content;
				return;
			}

			this.$parent.changePerspective('login')
		}
	}
};