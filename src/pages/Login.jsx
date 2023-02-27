import React, {useState} from "react"
import { useNavigate, Link} from "react-router-dom"
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase"

const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
        }catch(err){
            setErr(true);
        }
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat it UP</span>
                <span className='title'>Log in</span>
                <form onSubmit={handleSubmit} action="click">
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Log in</button>
                    {err && <span>Something went Wrong</span>}
                </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
}


export default Login;