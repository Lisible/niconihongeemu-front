import AuthenticationAPI from '@/model/api/AuthenticationAPI'
import AccessToken from "../../model/AccessToken";

export default {
	name: 'login',
	data: function () { 
		return {
			login: '',
			password: '',
			status: '',
		}
	},
	methods: {
		/**
		 * Connects the user, if the connection succeeded, redirects him to the home view
		 */
		connect: async function(){
			const response = await AuthenticationAPI.authenticate(this.login, this.password);
			console.log(response);
			const content = await response.json();

			if(this.$data.login === '') {
				this.status = {code: 403, message: "You forgot to type your login D:"};
				return;
			}
			else if(this.$data.password === '') {
				this.status = {code: 403, message: "You forgot to type your password D:"};
				return;
			}

			if(response.status !== 200) {
				this.status = content;
				return;
			}

			AccessToken.token = content.accessToken;
			this.$eventBus.$emit('ChangePerspective', 'home');
		}
	}
}