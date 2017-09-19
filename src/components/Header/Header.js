import React, { Component } from 'react';
import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h4>Home</h4>
                <h4>Baking</h4>
                <h4>Colorings</h4>
                <h4>Cookie Cutters</h4>
                <h4>Stencils</h4>
                <h4>Sweet Sugarbelle</h4>
                <h4>Tools &amp; Organization</h4>
            </div>
        )
    }
}
