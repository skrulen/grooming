const { makeAutoObservable } = require("mobx");

class LoginStore {
	loginActive = false;

	constructor() {
		makeAutoObservable(this);
	}

	changeLoginActive = () => this.loginActive = !this.loginActive;
}

export default new LoginStore();
