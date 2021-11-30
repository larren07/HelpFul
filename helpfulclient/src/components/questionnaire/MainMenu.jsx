import React,{useContext} from 'react'
import { QuizContext } from '../../Helpers/QuizContext'
import { UserContext } from '../../userComponent'
import "../../css/questionnaire.css"

function MainMenu() {
    const {signedIn} = useContext(UserContext)
    const{gameState,setGameState} = useContext(QuizContext)
    return (
        <div className="Menu">
            <div className="inner">
                <h2>Welcome, {signedIn.firstName}</h2>
            <button className="start"onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
            </div>
        </div>
    )
}

export default MainMenu
