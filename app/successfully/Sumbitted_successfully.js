import "./sumbitted.css";
import Header from "../components/Header";

function Sumbitted_components(){
    return(
        <>
        <Header/>
        <div className="sumbitted_components">
            <div className="correct_img">
                <img src="correct.png"/>
            </div>
            <div className="successfully_container">
                <h3 className="heading">Successfully Sumbitted</h3>
                <h6>Thank you for completing the test!</h6>
                <p className="Paragraph">
                    Review your results and keep practicing.
                    Great job and keep up the hard work!
                </p>
            </div>
            <div className="check_score">
                <span>Check Your Score</span>
            </div>

        </div>
        </>
    )

}

export default Sumbitted_components


