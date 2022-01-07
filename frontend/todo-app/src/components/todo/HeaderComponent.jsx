import {Link, useNavigate } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'
import React, {Component} from 'react'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href = "http://www.linglin.com" className = "navbar-brand">linglin</a></div> 
                    <ul className = "navbar-nav">
                       {isUserLoggedIn && <li><Link className="nav-link" to = "/welcome/linglin">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to = "/todos">Todos</Link></li>}
                    </ul> 
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to = "/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to = "/logout" onClick ={AuthenticationService.logout}>Logout</Link></li>}
                    </ul> 
                </nav>
            </header>
        )
    }
}

export const withRouter = (Component) => {
    const Wrapper = (props) => {
      const history = useNavigate();
      
      return (
        <Component
          history={history}
          {...props}
          />
      );
    };
    
    return Wrapper;
  };
 
 
export default withRouter(HeaderComponent);
 