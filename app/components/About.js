import "./About.css"

function  About(){
    return(
        <div className="about_div">
            <div className="rulles">
                <span>Instructions</span>
                <p>Please read the instructions carefully before you begin:</p>
                <ul>
                    <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                    <li> Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                    <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                    <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                    <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                    <li>Review: After submission, you may review your answers and scores.</li>
                </ul> 
                <p>
                    Please ensure a stable internet connection. If you encounter any issues, contact support immediately.
                </p>
                <p> 
                    Click 'Lets Start' to begin the test.<br/>
                    <b>Good luck</b>
                </p>
            </div>    
            
            <div className="border_line"></div>
            <a href="/assessment">
            <button id="start_button">Lets Start!</button>
             </a>   
        </div>       
    )
}

export default About