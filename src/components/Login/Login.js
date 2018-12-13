import Authentication from '@/model/Authentication'

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
		connect: async function(event){
			const response = await Authentication.authenticate(this.login, this.password);
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

			this.$parent.$emit('ConnectionEvent', content.access_token);
		}
	}
}