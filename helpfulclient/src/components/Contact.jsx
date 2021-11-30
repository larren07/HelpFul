import React,{useContext}from 'react'
import {UserContext} from "../userComponent"


function Contact() {
    const {signedIn,setSignedIn} = useContext(UserContext)

    return (
        <div>
            Contact Us
            <div>{signedIn.firstName}</div>
        </div>
    )
}

export default Contact
