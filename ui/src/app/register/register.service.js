/*@ngInject*/
class RegisterService {

    constructor ($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }

    createNewUser () {
        sessionStorage.setItem('login',this.credentials.login);
        sessionStorage.setItem('password',this.credentials.password);
        return this.$http
        .post(`${this.apiUrl}/users/new`, this.credentials)
        .then(result => result.data)
    }
}

export default RegisterService