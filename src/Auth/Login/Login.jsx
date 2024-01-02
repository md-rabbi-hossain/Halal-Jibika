import React, { useState } from 'react';
import './Login.css'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formValues.email.trim() === '' || formValues.password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, formValues.email, formValues.password);

        } catch (error) {
            console.error('Error signing in:', error.message);
        }

        console.log(formValues);
        setFormValues({
            email: '',
            password: '',
        });
    };
    return (
        <div className="wrapper">
            <h1>Hello Again!</h1>
            <p>Welcome back you've <br /> been missed!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                <p className="recover">
                    <a href="#">Recover Password</a>
                </p>
                <button type="submit">Sign in</button>
            </form>
            <p className="or">----- or continue with -----</p>
            <div className="icons">
                <FaGoogle />
                <FaGithub />
            </div>
            <div className="not-member">
                Not a member? <Link to="/signup">Register Now</Link>
            </div>
        </div>
    )
};

export default Login;
