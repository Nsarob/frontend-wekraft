import React from "react";
import Box from '@mui/material/Box';

import Sidebar from "../dashboard/sidebar";
import CustomerTables from "./customersItems/customerTame";
// import DashCard from "./dashcard";
// import DashTable from "./dashTable";



function Customer(){
    return (
        <>
         
         
         <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
    <CustomerTables/>
      </Box>
      </Box>
      </>
      )
      }
      export default Customer