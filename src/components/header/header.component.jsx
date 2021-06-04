import React from 'react';
import { Link } from 'react-router-dom'


export const Header = () =>{
    return (
        <div> 
            <Link to = "/signin">
                Sign Up
            </Link>
            <Link to = "/signin">
                Sign in
            </Link>
        </div>
    )
}