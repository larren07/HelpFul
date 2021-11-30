import React,{useState,useContext} from 'react'
import MainMenu from './questionnaire/MainMenu'
import Quiz from './questionnaire/Quiz'
import EndScreen from './questionnaire/EndScreen'
import { QuizContext } from '../Helpers/QuizContext'

function Questionnaire() {
    const[gameState,setGameState]=useState("menu")
    const[score,setScore]=useState(0)
    
    return (
        <div className="Questionnaire">
            <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
            <h1>Mental Help Questionnaire</h1>
            {gameState === "menu" && <MainMenu/>}
            {gameState === "quiz" && <Quiz/>}
            {gameState === "endScreen" &&<EndScreen/>}
            </QuizContext.Provider>
        </div>
    )
}

export default Questionnaire
