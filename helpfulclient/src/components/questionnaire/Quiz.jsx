import React,{useState,useContext} from 'react'
import { Questions } from '../../Helpers/QuestionBank'
import { QuizContext } from '../../Helpers/QuizContext'
import "../../css/questionnaire.css"

function Quiz() {
    const [currQuestion,setCurrentQuestion] = useState(0)
    const [optionChosen,setOptionChosen] = useState("")
    const {score,setScore,gameState,setGameState} = useContext(QuizContext)

    const nextQuestion = ()=>{
        if(optionChosen=="A"){
            setScore(score+3)
        }
        if(optionChosen=="B"){
            setScore(score+2)
        }
        if(optionChosen=="C"){
            setScore(score+1)
        }
        setCurrentQuestion(currQuestion+1)
    }

    const finishQuiz=()=>{
        if(optionChosen=="A"){
            setScore(score+3)
        }
        if(optionChosen=="B"){
            setScore(score+2)
        }
        if(optionChosen=="C"){
            setScore(score+1)
        }

        setGameState("endScreen")
    }

    return (
        <div className="Quiz">
            <div className="inner">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <div className="group">
                <button className="start" onClick={()=> setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
                </div>
                <div className="group">
                <button className="start" onClick={()=> setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
                </div>
                <div className="group">
                <button className="start" onClick={()=> setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
                </div>
                <div className="group">
                <button className="start" onClick={()=> setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
                </div>
            </div>

            {currQuestion == Questions.length -1 ? (
                <button className="start" onClick={finishQuiz}>Finish Quiz</button>
            ):(
                <button className="start" onClick={nextQuestion}>Next Qt</button>
            )}

</div>
            
        </div>
    )
}

export default Quiz
