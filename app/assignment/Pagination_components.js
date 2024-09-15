import "./header_pagination.css"
function Pagination(){
    return(
        <div className="pagination_main">
            <div className="page_number">
                <div className="back">
                    <img src="back.png"/>
                </div>
                <div className="page_first">1</div>
                <div className="page_hidden">...</div>
                <div className="page_seconed">2</div>
                <div className="page_three">3</div>
                <div className="page_four">4</div>
                <div className="page_five">5</div>
                <div className="page_hidden">...</div>
                <div className="page_six">6</div>
                <div className="page_seven">7</div>
                <div className="page_eight">8</div>
                <div className="nextpage">
                    <img src="next.png"/>
                </div>
            </div>
        </div>    
    )
}

export default Pagination