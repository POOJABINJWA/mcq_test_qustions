import Filter from "./Filters"
import Questions from "./Questions_assessment"

function Timer(){
    return(
        <div className="container">
            <div className="timer_filter_div">
                <div className="timer_div">
                    <div className="clock_first">
                        <div className="clock_seconed"></div>
                    </div>
                </div>
                <Filter />        
            </div>  
            {/* <Filter />   */}
            <Questions />    
        </div>    
    )
}

export default Timer
