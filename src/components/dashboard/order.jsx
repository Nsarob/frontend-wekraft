import React from "react";
import Box from '@mui/material/Box';

import Sidebar from "./sidebar";
import OrderTables from "../scams/orderItems/ordersForm";
// import DashCard from "./dashcard";
// import DashTable from "./dashTable";



function Order(){
    return (
        <>
         
         
         <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
     <OrderTables/>
      </Box>
      </Box>
         
        
          
        
       
   
        
        </>
    )
}
export default Order