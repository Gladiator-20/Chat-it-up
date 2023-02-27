import React,{ useContext } from 'react'
import {signOut} from "firebase/auth"
import {auth} from "../firebase"
import {AuthContext} from "../context/AuthContext"

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className='Navbar'>
            <span className='logo'>Chat it Up</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt=''/>
                <span>{currentUser.diplayName}</span>
                <button onClick={()=>signOut(auth)}>Logout</button>

            </div>
        </div>
    )
}

export default Navbar;