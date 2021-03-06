import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Menu from '../Menu/Menu';

const Login = () => {
    const {user, signInUsingGoogle } = useAuth();
    return (
        <div className="container">
            <Menu></Menu>
            <div>
                <h2>Login</h2>
                <form>
                    <input  type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to  website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
                <h2>{user.displayName}</h2>
            </div>
        </div>
    );
};

export default Login;