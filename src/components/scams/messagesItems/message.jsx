import React from "react";
import DidYou from "../didItems/didForm";
import DidTables from "../didItems/didTable";


function Messagex(){
return (
    <>
        <div className="message-container">
            <div className="message-cont">
                <div className="message">
               <DidYou/>
               <DidTables/>
                </div>
            </div>
        </div>
    </>
)
}
export default Messagex