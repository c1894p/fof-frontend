import React from 'react';
import { Link } from 'react-router-dom'

import "../header/header.styles.css"

export const Header = () =>{
    return (
        <div className="header"> 
            <Link to = "/signin">
                Sign Up
            </Link>
            <Link to = "/signin">
                Sign in
            </Link>
        </div>
    )
}