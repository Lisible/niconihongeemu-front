const END_POINT = "http://localhost:3000/authentication";

export default class AuthenticationBackend {
	static async registerUser(login, password) {
		return await fetch(END_POINT + "/user", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({login: login, password: password})
		});
	}
}