import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setAuthUser(user)
            } else {
                // User is signed out
                setAuthUser(null)
            }
        });
        return () => {
            // Unsubscribe auth listener on unmount
            listen()
        }
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign out successful")
        }).catch((error) => {
            // An error happened.
            console.log("Sign out failed")
        });
    }

    return (
        <div>
            {authUser ? <><p><h1>Logged in as {authUser.email} <button onClick={handleSignOut}>SignOut</button></h1></p></> : <><p><h1>Not logged in</h1></p></>}
        </div>
    )
}

export default AuthDetails
