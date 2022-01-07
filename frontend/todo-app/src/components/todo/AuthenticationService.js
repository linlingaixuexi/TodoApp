class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log("Login Successful!")
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }
}

export default new AuthenticationService()

