import React, { Component } from 'react'
import './Landing.css'

export default class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='social-media'> 
                    <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-pinterest-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </div>
                <div className='jumbotron'>
                    <img src={require('../../images/Typic.JPG')}/>
                </div>
            </div>
        )
    }
}
