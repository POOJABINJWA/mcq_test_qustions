import "./styles1.css"
import Pagination from "./Pagination_components";

function Header_assessment(){
    return(
        <div className="header_seconed">
            <div className="main_header">
                <div className="logo_padination">
                    <div className="logoImageBox">
                        <div className="logo_img"><img src="Logo.png"/></div>
                    </div>
                        <Pagination />     
                    
                </div>
                <div className="submit_div">
                    <button className="submit_button">Submit</button>
                </div>
         
            </div>
            
            
        </div>
       
    )
}

export default Header_assessment