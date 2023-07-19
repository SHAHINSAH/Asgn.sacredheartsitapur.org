import React, { useState } from 'react';
import './SignUpp.css';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs
        if (name.trim() === '') {
            setError('Please enter your name.');
            return;
        }

        if (email.trim() === '') {
            setError('Please enter your email.');
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            setError('Please enter a 10-digit mobile number.');
            return;
        }

        if (password.trim() === '') {
            setError('Please enter a password.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // If all validations pass, proceed with signup logic
        setSuccessMessage('Signup successful!');
        setError('');
        // Additional logic can be added here to handle API calls or other signup actions
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            {successMessage && <p>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <input
                        type="tel"
                        pattern="[0-9]{10}"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" >Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
