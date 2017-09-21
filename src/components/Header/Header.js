import React, { Component } from 'react';
import './Header.css'
import {Link} from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/baking'><h4>Baking</h4></Link>
                <Link to='/shop'><h4>Shop</h4></Link>
                <Link to='/cart'><img src={require('../../images/shopping-cart.svg')}/></Link>
            </div>
        )
    }
}
