import React,{useContext} from 'react'
import { QuizContext } from '../../Helpers/QuizContext'
import "../../css/questionnaire.css"
import { UserContext } from '../../userComponent'

function EndScreen() {
    const {signedIn,setSignedIn} = useContext(UserContext)
    const {score} = useContext(QuizContext)
    return (
        <div className="Menu">
            <div className="inner">
                <h2>Thank You for answering {signedIn.firstName}! Your Score is {score}</h2>
            
            </div>
        </div>
    )
}

export default EndScreen
