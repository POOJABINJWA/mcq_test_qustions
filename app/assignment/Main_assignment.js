import Filter from "./Filters"
import Timer from "./Timer"
import Moblile_filter from "./Moblie_filters"
import "./main_assignment.css"
import Questions_assessment_container from "./Questions_assessment"

function Main_assignment() {
    return (
        <div className="main_container">
            <div className="question_timer_container">
                <div className="timer_filter_div">
                <Timer/>
                <Filter />
                <Moblile_filter/>

                </div>
                <Questions_assessment_container />
            </div>
        </div>
    )
}

export default Main_assignment
