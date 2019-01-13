import Configuration from '@/model/Config'

export default class AuthenticationAPI {
	static getEndPoint() {
		return Configuration.backend_domain + "/authentication";
	}

	/**
	 * Registers a new user
	 * @param login The login of the user
	 * @param password The password of the user
	 */
	static async registerUser(login, password) {
		return await fetch(this.getEndPoint() + "/user", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({login: login, password: password})
		});
	}

	/**
	 * Authenticates a user
	 * @param login The login of the user
	 * @param password The password of the user
	 */
	static async authenticate(login, password) {
		return await fetch(this.getEndPoint() + "/accessToken", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({login: login, password: password})
		});
	}
}