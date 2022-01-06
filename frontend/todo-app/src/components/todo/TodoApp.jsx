import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom'
import LoginComponent from './LoginComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className = "TodoApp">
                <Router>
                    <Routes>
                            <Route path="/" element={<LoginComponent/>}/>
                            <Route path="/login" element={<LoginComponent/>}/>
                            <Route path="/welcome/:name" element={<WelcomeComponent/>}/>
                            <Route element={<ErrorComponent/>}/>
                    </Routes>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occured. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}
// class WelcomeComponent extends Component {
//     render() {
//         return <div>Welcome Todo</div>
//     }  
// }

// class LoginComponent extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             username: 'linglin',
//             password: '',
//             hasLoginFailed: false,
//             showSuccessMessage: false

//         }
//         // this.handleUserNameChange = this.handleUserNameChange.bind(this)
//         // this.handlePasswordChange = this.handlePasswordChange.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//         this.loginClicked = this.loginClicked.bind(this)
//     }

//     handleChange(event) {
//         this.setState({[event.target.name]:event.target.value})
//     }
//     // handleUserNameChange(event) {
//     //     this.setState({username : event.target.val})
//     // }

//     // handlePasswordChange(event) {
//     //     this.setState({password : event.target.val})
//     // }

//     loginClicked() {
//         if(this.state.username === 'linglin' && this.state.password === 'dummy'){
//             this.setState({showSuccessMessage:true})
//             this.setState({hasLoginFailed:false})
//         } 
//         else {
//             this.setState({showSuccessMessage:false}) 
//             this.setState({hasLoginFailed:true})
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {/* <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>
//                 <ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage}/> */}
//                 {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
//                 {this.state.showSuccessMessage && <div>Login Successful</div>}
//                 User Name: <input type = "text" name = "username" value={this.state.username} onChange = {this.handleChange}/>
//                 Password: <input type = "password" name = "password" value={this.state.password} onChange = {this.handleChange}/>
//                 <button onClick = {this.loginClicked}>Login</button>
//             </div>
//         )
//     }
// }

// // function ShowInvalidCredentials(props) {
// //     if (props.hasLoginFailed) {
// //         return <div>Invalid Credentials</div>
// //     } 
// //     return null  
// // }

// // function ShowLoginSuccessMessage(props) {
// //     if (props.showSuccessMessage) {
// //         return <div>Login Successful</div>
// //     } 
// //     return null  
// // }

export default TodoApp


