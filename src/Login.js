import React, { useState } from 'react';

const LoginPage = ({ toggleForm }) => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Perform login logic here
        console.log('Login:', loginEmail, loginPassword);
    };

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '8px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        background: '#4CAF50',
                        color: 'white',
                        padding: '10px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
            </form>
            <p style={{ marginTop: '8px' }}>
                Don't have an account?{' '}
                <button
                    onClick={toggleForm}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#4CAF50',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        padding: '0',
                    }}
                >
                    Sign Up
                </button>
            </p>
        </div>
    );
};

const SignUpPage = ({ toggleForm }) => {
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupMobile, setSignupMobile] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        setSuccessMessage("Hey!! you have submitted successfully");
        // Perform sign up logic here
        console.log('Sign Up:', signupName, signupEmail, signupMobile, signupPassword);
    };

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <h2>Sign Up</h2>
            {successMessage && <p>{successMessage}</p>}
            <form onSubmit={handleSignUp}>
                <div style={{ marginBottom: '8px' }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <label>Mobile:</label>
                    <input
                        type="tel"
                        value={signupMobile}
                        pattern="[0-9]{10}"
                        onChange={(e) => setSignupMobile(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />

                </div>
                <div style={{ marginBottom: '8px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={signupPassword}
                        minLength={6}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        background: '#4CAF50',
                        color: 'white',
                        padding: '10px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Sign Up
                </button>
            </form>
            <p style={{ marginTop: '8px' }}>
                Already have an account?{' '}
                <button
                    onClick={toggleForm}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#4CAF50',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        padding: '0',
                    }}
                >
                    Login
                </button>
            </p>
        </div>
    );
};

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f2f2f2',
            }}
        >
            <div>
                {isLogin ? (
                    <LoginPage toggleForm={toggleForm} />
                ) : (
                    <SignUpPage toggleForm={toggleForm} />
                )}
            </div>
        </div>
    );
};

export default Login;
