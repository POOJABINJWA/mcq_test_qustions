import "./mobile.css"
import Header from "../components/Header"

function  Mobile_pagination(){
    return(
        <>
        <Header /> 
        <div className="mobile_pagination">
            <div className="page_start">
                <img src="back.png"/>
            </div>
            <div  className="page_mobile">1</div>
            <div className="page_hidden">...</div>
            <div className="page_mobile">5</div>
            <div className="page_hidden">...</div>
            <div className="page_mobile">8</div>
            <div className="page_end">
                <img src="next.png"/>
            </div>

        </div> 
       </> 
    )       
}
export default Mobile_pagination