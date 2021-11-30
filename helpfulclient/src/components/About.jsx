import React,{useContext}from 'react'
import {UserContext} from "../userComponent"

function About() {
    const {signedIn,setSignedIn} = useContext(UserContext)
    return (
        <div>
            About US
            <div>{signedIn.firstName}</div>
        </div>
    )
}

export default About
