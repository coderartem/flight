/* @ngInject */
class SigninService {
    constructor ($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }

    /**
     * Verification of Client on sugn in
     */
    verifyUser () {
        sessionStorage.setItem('login',this.credentials.login);
        sessionStorage.setItem('password',this.credentials.password);
        return this.$http
        .post(`${this.apiUrl}/users/verify`, this.credentials)
    }
}

export default SigninService