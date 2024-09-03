import Filter from "./Filters"
import Questions_assessment_container from "./Questions_assessment"
import "./Timer.css"

function Timer(){
    return(
        <div className="main_container">
            <div className="question_timer_container">
                <div className="timer_filter_div">
                    <div className="timer_div">
                        <div className="clock_first">
                            <div className="clock_seconed"></div>
                        </div>
                        <h6>Remaining Time</h6>
                    </div>
                    <div className="filter_buuton_box">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <Filter />  
            
                </div> 
                <Questions_assessment_container />      
            </div>  
        </div>    
    )
}

export default Timer
