import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, useParams, Route} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import {Link, useNavigate } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import ListTodosComponent from './ListTodoComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'

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
                                                    } /> 
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

export default TodoApp