import "./timer.css";
function Timer(){
    return(
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
    )
}
export default Timer