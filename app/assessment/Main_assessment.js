import Filter from "./Filters";
import Timer from "./Timer";
import Moblile_filter from "./Moblie_filters";
import Questions_container from "./Questions_container";
import "./main_assessment.css";

function Main_assessment() {
    return (
        <div className="main_container">
            <div className="question_timer_container">
                <div className="timer_filter_div">
                <Timer/>
                <Filter />
                <Moblile_filter/>

                </div>
                <Questions_container />
            </div>
        </div>
    )
}

export default Main_assessment;
