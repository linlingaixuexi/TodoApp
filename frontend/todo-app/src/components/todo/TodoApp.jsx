import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import ListTodosComponent from './ListTodoComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import withParams from "./withParams.jsx"

class TodoApp extends Component {
    render() {
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
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
                                                                <WelcomeComponentWithParams/>
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