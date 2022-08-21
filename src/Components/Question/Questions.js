import React, { useEffect, useRef, useState } from "react";
import "../Question/Question.css"

const Questions = (props) => {

    const [selected, setSelected] = useState("");
    const [error, setError] = useState("")
    const radiosWrapper = useRef()

    const changeHandler = (e) => {
        setSelected(e.target.value)
        if(error){ 
            setError("")
        }
    }
    useEffect( () => {
        const checkedInput = radiosWrapper.current.querySelector('input:checked');
        if(checkedInput) {
            checkedInput.checked = false;
        }
    },[props.data])

    const nextQuestionHandler = (e) => {
       if(selected === "") {
        return setError("Please select one option!")
       }
       props.answerUpdate(prevState => [...prevState, {q: props.data.question, a: selected}])
       setSelected("");
       if(props.activeQuestion < props.numberOfQuestions - 1){
        props.setActiveQuestion(props.activeQuestion + 1)
       }
       else{
        props.setNextStep(3)
       }
    }

    return ( 
        <div className="questionBody">
            <h2>{props.data.question}</h2>
            <div ref={radiosWrapper}>
            {
               props.data.options.map((choice, i) => (
                <label className="questionLabel" key={i} > 
                    <input type="radio" name="answer" value={choice} onChange ={changeHandler} />
                    {choice}
                </label>
                )
            )}
            </div>
           {error &&  <div>
                {error}
            </div> }
            <button className="questionBtn" onClick={nextQuestionHandler} > Next</button>
        </div>
     );
}
 
export default Questions;
