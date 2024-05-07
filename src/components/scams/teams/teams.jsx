import React from "react";
// import DidTables from "../didItems/didTable";
import UploadTearm from "../productitems/ourteam";
import Sidebar from '../../dashboard/sidebar';
import { Box } from "@mui/material";
import TeamTables from "./teamTbles";

function OurTeam(){
return (
    <>
    <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
         <div className="message-container">
            <div className="message-cont">
                <div className="message">
               <UploadTearm/>
               <TeamTables/>
                </div>
            </div>
        </div>
      </Box>
      </Box>
      
    </>
)
}
export default OurTeam