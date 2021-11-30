import React,{useContext} from 'react'
import {UserContext} from "../userComponent"
import { useNavigate } from "react-router-dom";


function Mental() {
    const navigate = useNavigate()
    const {signedIn,setSignedIn} = useContext(UserContext)
    const redirect =()=>{
        navigate('/clientsignin')

    }

    const questionnaire =()=>{
        navigate('/mental/questionnaire')
    }

    return (
        <div>
            {signedIn.loggedIn =="True"?(
                <div>
                    <h2>Mental Help</h2>
                    <button onClick={questionnaire}>Answer the Questionnaire</button>
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

export default Mental
