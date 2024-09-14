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
                            <div className="clock_seconed">
                                <div className="time">
                                    <span class="minutes">50</span>
                                    <span class="colon">:</span>
                                    <span class="seconds">20</span>
      
                                </div>
                                
                            </div>
                        </div>
                        <h6>Remaining Time</h6>
                    </div>
                    <div className="popop_filter">
                        <div className="line1">
                            <div className="col1"></div>
                            <div className="col2"></div>
                            <div className="col3"></div>
                        </div>
                        <div className="filter_mobile">Filters</div>    
                    
                    </div>
                    <Filter />  
            
                </div> 
                <Questions_assessment_container />      
            </div>  
        </div>    
    )
}

export default Timer
