import React, { Component } from 'react'
import {Link } from 'react-router-dom';
// import HelloWorldService from "../../api/todo/HelloWorldService";
// import {useParams} from 'react-router-dom' 

class WelcomeComponent extends Component {
        constructor(props) {
            super(props)
            this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        
        }
        // using <a> will make entire page refreshed. However, doing single page app, you don't want to refresh whole page. so use <Link>
        render(){
            return (
                <>
                    <h1>Welcome { this.props.params.name }!</h1> 
                    <div className="container">
                        You can manage your todos <Link to="/todos">here</Link>.</div>
                    <div className="container">
                        Click here to get a customized message.
                        <button onClick={this.retrieveWelcomeMessage}
                            className="btn btn-success">Get Welcome Message</button>
                    </div>
                </>)
        }

        retrieveWelcomeMessage(){
                console.log('retrieve clicked')
            }    
       
        }
        


// function WelcomeComponent () {
//     let {name} = useParams()
//     return <div>
//                 <h1> Welcome!</h1>
//                 <div className ="container">Hi {name}! 
//                 Welcome to your Todo Application. 
//                 You can manage your todos <Link to = "/todos">here</Link>.
//                 </div>
//                 <div className ="container">
//                 Click here to get a customized welcome message. 
//                 <button onClick = {this.retrieveWelcomeMessage} 
//                         className ="btn btn-success"> Get Welcome Message</button>
//                 </div>
//         </div>

// }


export default WelcomeComponent