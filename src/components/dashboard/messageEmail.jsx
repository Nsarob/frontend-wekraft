import React from "react";
import Box from '@mui/material/Box';
import Sidebar from "./sidebar";
import Email from "../scams/messagesItems/email";
// import DashCard from "./dashcard";
// import DashTable from "./dashTable";



function EmailDash(){
    return (
        <>
         
         
         <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
     <Email/>
      </Box>
      </Box>
         
        
          
        
       
   
        
        </>
    )
}
export default EmailDash
         