/*@ngInject*/
class RegisterService {

    constructor ($http, apiUrl) {
        this.$http = $http
        this.apiUrl = apiUrl
    }

    /**
     * Creation of new user
     */
    createNewUser () {
        if(!this.credentials || !this.credentials.login || !this.credentials.password){
            alert('You forgot something dawg!');
            return false;
        }
        sessionStorage.setItem('login',this.credentials.login);
        sessionStorage.setItem('password',this.credentials.password);
        return this.$http
            .post(`${this.apiUrl}/users/new`, this.credentials)
            .then(result => {
                if(!result.data){
                    alert('Server Error or user already exist');
                }
             return result.data
            })
    }
}

export default RegisterService