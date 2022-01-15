import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, useParams, Route} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import {Link, useNavigate } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'

//import WelcomeComponent from './WelcomeComponent.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className = "TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Routes>
                            <Route path="/" element={<LoginComponent/>}/>
                            <Route path="/login" element={<LoginComponent/>}/>
                            <Route path="/welcome/:name"
                                                    element={
                                                            <AuthenticatedRoute>
                                                                <WelcomeComponent />
                                                            </AuthenticatedRoute>
                                                    } />
                            <Route path ="*" element={<ErrorComponent/>}/>
                            <Route path="/todos" element={
                                                        <AuthenticatedRoute>
                                                            <ListTodosComponent />
                                                        </AuthenticatedRoute>
                                                    } /> />
                            <Route path="/logout" element={<LogoutComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

// class HeaderComponent extends Component {
//     render() {
//         const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//         console.log(isUserLoggedIn);

//         return (
//             <header>
//                 <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href = "http://www.linglin.com" className = "navbar-brand">linglin</a></div> 
//                     <ul className = "navbar-nav">
//                         <li><Link className="nav-link" to = "/welcome/linglin">Home</Link></li>
//                         <li><Link className="nav-link" to = "/todos">Todos</Link></li>
//                     </ul> 
//                     <ul className = "navbar-nav navbar-collapse justify-content-end">
//                         <li><Link className="nav-link" to = "/login">Login</Link></li>
//                         <li><Link className="nav-link" to = "/logout" onClick ={AuthenticationService.logout}>Logout</Link></li>
//                     </ul> 
//                 </nav>
//             </header>
//         )
//     }
// }


class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserverd 2022 @linglin</span>
            </footer>
        )
    }
}


class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : 
            [
            {id: 1, description : 'Learn React', done:false, targetDate: new Date()},
            {id: 2, description : 'Find a job', done:false, targetDate: new Date()},
            {id: 3, description : 'Visit families', done:false, targetDate: new Date()}
            ]
        }
    }
    render() {
    
        return (
        <div>
            <h1>List Todos</h1>
            <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.state.todos.map (
                                todo =>
                                    <tr key = {todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}


function WelcomeComponent () {
        let {name} = useParams()
        return <div>
                    <h1> Welcome!</h1>
                    <div className ="container">Hi {name}! Welcome to your Todo Application. You can manage your todos <Link to = "/todos">here</Link>.
                    </div>
            </div>
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


