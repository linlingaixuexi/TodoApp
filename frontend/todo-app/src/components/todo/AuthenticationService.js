class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log("Login Successful!")
        sessionStorage.setItem('authenticatedUser', username);
    }
}

export default new AuthenticationService()