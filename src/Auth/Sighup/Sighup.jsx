import './Sigup.css';
import { auth } from '../../Firebase/config';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../../Firebase/config';
import { useState } from 'react';



function SignUpForm() {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const [formValues, setFormValues] = useState({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            // Handle the signed-in user as needed
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Form Values:', formValues);

        if (formValues.password !== formValues.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (
            formValues.firstName.trim() === '' ||
            formValues.email.trim() === '' ||
            formValues.password.trim() === '' ||
            formValues.confirmPassword.trim() === ''
        ) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            await createUserWithEmailAndPassword(
                auth,
                formValues.email,
                formValues.password
            );
            toast.success('User created successfully!');
        } catch (error) {
            console.error('Error creating user:', error.message);

            console.error('Error code:', error.code);

            switch (error.code) {
                case 'auth/invalid-email':
                    toast.error('Invalid email address');
                    break;
                case 'auth/email-already-in-use':
                    toast.error('Email address already in use');
                    break;
                case 'auth/operation-not-allowed':
                    toast.error('Email/password accounts are not enabled');
                    break;
                default:
                    toast.error('Error creating user');
            }
        }

        setFormValues({
            firstName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="sicontainer">
            <div className="signup-box">
                <h1>Sign Up</h1>
                <h4>It's free and only takes a minute</h4>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder=""
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder=""
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder=""
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder=""
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <div className="social-signup">
                    {/* Google Sign Up Button */}
                    <button type="button" onClick={signInWithGoogle} style={{ backgroundColor: '#197BE9' }}>
                        <FaGoogle />
                    </button>
                    {/* GitHub Sign Up Button */}
                    <button type="button" style={{ backgroundColor: '#197BE9' }}>
                        <FaGithub />
                    </button>
                </div>
                <p className="para-2">
                    <Link to="/login">Already have an account?</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUpForm;











