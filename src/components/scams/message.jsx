import React from "react";
import Box from '@mui/material/Box';

import Sidebar from "../dashboard/sidebar";
import Messagex from "./messagesItems/message";
// import DashCard from "./dashcard";
// import DashTable from "./dashTable";



function Message(){
    return (
        <>
         
         
         <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
   <Messagex/>
      </Box>
      </Box>
      </>
      )
      }
      export default Message
