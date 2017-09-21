import React, { Component } from 'react'
import Header from '../Header/Header'
import './Landing.css'


export default class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <Header />
                <div className='social-media'> 
                    <a href='https://www.etsy.com/shop/cinnamonandsugarco'><i className="fa fa-etsy fa-1x" aria-hidden="true"></i></a>
                    <a href=''><i className="fa fa-pinterest-square fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.instagram.com/cinnamonandsugarco/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                </div>
                <div className='jumbotron'>
                    <img src={require('../../images/Typic.JPG')}/>
                </div>
            </div>
        )
    }
}
