import Filter from "./Filters"
import Questions_assessment_container from "./Questions_assessment"
import "./Timer.css"
import Mobile_pagination from "./Mobile_pagination"

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
                    <Filter />  
            
                </div> 
                <Questions_assessment_container />      
            </div>  
        </div>    
    )
}

export default Timer
