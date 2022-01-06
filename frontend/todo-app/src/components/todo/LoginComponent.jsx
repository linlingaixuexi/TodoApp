import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

class LoginComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: 'linglin',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false

        }
        // this.handleUserNameChange = this.handleUserNameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    // handleUserNameChange(event) {
    //     this.setState({username : event.target.val})
    // }

    // handlePasswordChange(event) {
    //     this.setState({password : event.target.val})
    // }

    loginClicked() {
        if(this.state.username === 'linglin' && this.state.password === 'dummy'){
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        } 
        else {
            this.setState({showSuccessMessage:false}) 
            this.setState({hasLoginFailed:true})
        }
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>
                    <ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage}/> */}
                    {this.state.hasLoginFailed && <div className ="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type = "text" name = "username" value={this.state.username} onChange = {this.handleChange}/>
                    Password: <input type = "password" name = "password" value={this.state.password} onChange = {this.handleChange}/>
                <button className="bnt bnt-success" onClick= {this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     } 
//     return null  
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     } 
//     return null  
// }

function WithNavigate(props) {
    let navigate = useNavigate()
    return <LoginComponent {...props} navigate={navigate} />
}

export default WithNavigate