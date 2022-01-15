import React, { Component } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'

function WelcomeComponent () {
    let {name} = useParams()
    return <div>
                <h1> Welcome!</h1>
                <div className ="container">Hi {name}! Welcome to your Todo Application. You can manage your todos <Link to = "/todos">here</Link>.
                </div>
        </div>
}

export default WelcomeComponent