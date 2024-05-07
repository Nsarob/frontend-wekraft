import React from "react";
import Box from '@mui/material/Box';

import Sidebar from "../dashboard/sidebar";
import ProductForm from "./productitems/productForm";
// import ProductTables from "./productitems/productTable";
// import DashCard from "./dashcard";
// import DashTable from "./dashTable";



function Prodcuct(){
    return (
        <>
         
         
         <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p:3 }}>
         <div className="form">
         <ProductForm/>
         
         </div>
   
      </Box>
      </Box>
      </>
      )
      }
      export default Prodcuct
