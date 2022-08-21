import { useEffect, useState } from "react";
import "../Question/EndQuiz.css"

const EndQuiz = (props) => {

    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [message, setMessage] = useState("")

    useEffect(() => {
        let correct = 0
        props.results.forEach((result,index) => {
            if(result.a === props.data[index].answer){
                correct++;
            }
        });
        setCorrectAnswers(correct)
        if(correct === 1 || correct === 0 ){
            setMessage("try again")
        }
        else if(correct === 3 || correct === 2 ){
            setMessage("You can do better try again")
        }
        else if(correct === props.data.length ){
            setMessage("Excellent")
        }
    },[props.results, props.data])

    return ( 
        <div>
            <h1>Result:</h1>
            <h2>You scored</h2>
            <h4> {correctAnswers} out of {props.data.length}</h4>
            <h3> {Math.floor((correctAnswers / props.data.length) * 100)} % </h3>
            <h1>{message}</h1>
            <button className="endQuizBtn" onClick={props.reset} >Try Again</button>
        </div>
    );
}
 
export default EndQuiz;