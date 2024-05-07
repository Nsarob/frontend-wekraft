import React from "react";
import Box from '@mui/material/Box';

import Sidebar from "../dashboard/sidebar";
import UploadVideo from "../upload";
// import DashCard from "./dashcard";
// import DashTable from "./dashTable";



function Report(){
    return (
        <>
         
         
         <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        <UploadVideo/>
      </Box>
      </Box>
      </>
      )
      }
      export default Report