import "./filters.css"

function Filter(){
    return(
        <>
        <div className="filter_container">
            <div className="filter">
                <div className="heading_filter">FILTERS
                    <div className="Question_Score">
                        <span>Question Score</span>
                        <div className="All_filter_number">
                            <div className="ALL_div">
                                All
                            </div>
                            <div className="number">
                                10
                            </div>
                            <div className="number">
                                15
                            </div>
                            <div className="number">
                                20
                            </div>
                            
                        </div>
                        <div className="Question_Attempted">
                            <span>Questions Attempted</span>

                            <div className="All_attempted_unattempted_div">
                                <div className="All_box">
                                    All(40)
                                </div>
                                <div className="Attempted_box">
                                    Attempted(3)
                                </div> 
                                <div className="Attempted_box">
                                    Unattempted(37)
                                </div>   

                            </div> 
                        </div>


                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Filter;