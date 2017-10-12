/* @ngInject */
class SigninService {
    constructor ($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
        this.donaldStyle = {display: 'none'};
    }

    /**
     * Verification of Client on signin
     */
    verifyUser () {
        if(!this.credentials || !this.credentials.login || !this.credentials.password){
            alert('You forgot something dawg!');
            return false;
        }
        sessionStorage.setItem('login',this.credentials.login);
        sessionStorage.setItem('password',this.credentials.password);
        return this.$http
            .post(`${this.apiUrl}/users/verify`, this.credentials).then((res) => {
                if(!res.data){
                    this.donaldStyle = {display: 'block', opacity: 0.5, "margin-bottom": '8%'}
                }
                return res;
            })
    }
}

export default SigninService