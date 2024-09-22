function Question_Box() {
    return (
        <div className="question_box">
            <div className="question_score_div">
                <span className="question">Question 1</span>
                <span className="score">Score +1</span>
            </div>
            <div className="question_container">
                <p className="question_text">Which of the following committees recommended inclusion of fundamental duties ?</p>
                <form>
                    <div className="radio_group">
                        <label className="options">
                            <input type="radio" name="committees" className="single_option" />
                            Tarapore Committee
                        </label><br />

                        <label className="options">
                            <input type="radio" name="committees" className="single_option" />
                            Radha Krishnan Committee
                        </label><br />

                        <label className="options">
                            <input type="radio" name="committees" className="single_option" />
                            Swaran Singh Committee
                        </label><br />

                        <label className="options">
                            <input type="radio" name="committees" className="single_option" />
                            Balwantrai Mehta Committee
                        </label><br />

                    </div>
                </form>

            </div>
        </div>


    )
}
export default Question_Box ;