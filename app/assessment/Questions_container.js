import "./question.css";
import Question_Box from "./Question_Box";

function Questions_container() {
    return (
        <div className="Question_assignment_container">
            <Question_Box />
            <Question_Box/>
            <Question_Box/>

        </div>
    )
}

export default Questions_container;