import { useRef } from "react"
import React from 'react'
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router"

export default function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleClick = async (e) => {
        
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match")
        }else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }

            try {
                await axios.post("http://localhost:8800/api/v1/auth/register",user)
                history.push("/login")
            }catch(err){
                console.log(err)
            }
            
        }
    }

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Social</h3>
                    <span className="registerDesc">
                        Connect with friends and the  world around you
                    </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="registerInput" type="text"/>
                        <input placeholder="Email" required ref={email} className="registerInput" type="email"/>
                        <input placeholder="Password" required ref={password} className="registerInput" type="password" minLength="6"/>
                        <input placeholder="Password Again" required ref={passwordAgain} className="registerInput" type="password" minLength="6"/>
                        <button className="registerButton" type="submit">Sign Up</button>
                        <button className="registerRegisterButton">
                            Log into account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
