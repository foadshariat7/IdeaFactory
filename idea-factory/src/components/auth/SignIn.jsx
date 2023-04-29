import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert } from 'react-bootstrap'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = (e) => {
        // Save the email and password
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential)
                // const user = userCredential.user;
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error signing in")
                console.log(errorCode, errorMessage)
            });

    }
    return (
        <div className='sign-in-container'>
            <form onSubmit={handleSignIn}>
                <h1>Log In</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Log In</button>
            </form>

            <div className="w-100 text-center mt-2">
                Don't have an account?
                <Link to="/signUp">
                    <Button>
                        <p>Sign Up</p>
                    </Button>
                </Link>
            </div>
        </div>


    )
}

export default SignIn
