import "../Components/Start.css"

const  Start = (props) => {
    return ( 
        <div className="start">
            <h1>WELCOME <br></br> TO <br></br> SPORT QUIZ</h1>
            <button className="startBtn" onClick={props.startQuiz} > Start</button>
            <p>Good luck!</p>
        </div>
    );
}
 
export default Start;