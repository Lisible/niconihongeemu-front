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
		/**
		 * Registers the user
		 */
		register: async function(){
			const response = await AuthenticationAPI.registerUser(this.login, this.password);
			if(response.status !== 200) {
				this.status = await response.json();
				return;
			}

			this.$eventBus.$emit('ChangePerspective', 'login');
		}
	}
};