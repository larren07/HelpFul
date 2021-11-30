import React,{useContext}from 'react'
import {UserContext} from "../userComponent"
import { useNavigate } from "react-router-dom";

function Physical() {
    const {signedIn,setSignedIn} = useContext(UserContext)
    const navigate=useNavigate()
    const redirect =()=>{
        navigate('/clientsignin')

    }

    return (
        <div>
            {signedIn.loggedIn =="True"?(
                <div>
                    Physical
                </div>
            ):(
                <div>
                    <h2>Please Sign In First</h2>
                    <button onClick={redirect}>Sign In</button>
                </div>
            )}
        </div>
    )
}

export default Physical
