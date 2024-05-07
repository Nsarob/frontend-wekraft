import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function OrderTables() {
  const [product, setProduct]= useState([])

  const handleDeleted = async (itemsId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3030/API/order/${itemsId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to delete item with ID ${itemsId}`);
        }

        const data = await response.json();

        const message = data?.message || 'Item deleted successfully!';
        localStorage.setItem('deletedMessage', message);

        window.location.reload();
    } catch (error) {
        console.error('Error deleting item:', error);
        alert(error.message);
    }
}

  useEffect(()=>{
    const fetchProduct = async ()=>{
       const response = await axios.get(`https://masterkraft-bn.onrender.com/API/order`)
       setProduct(response.data)
    };
    fetchProduct([])
  },[])
  
 
  return (
    <>
    <div className='items'>
    <h1>ORDERING ITEMS</h1>
    </div>
   
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontSize:'1.8rem'}}>NO</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>QUANTITY</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>PRODUCT-NAME</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>PRICE</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>NUMBER</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>SHIPPINGADDRESS</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>TOTAL PRICE</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>EMAIL</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>TIME</StyledTableCell>
            <StyledTableCell align="center" style={{fontSize:'1.4rem',backgroundColor:'#fdc800'}} colSpan={2}>OPTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product && product.datas && product.datas.map((row,index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {index +1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.productname}</StyledTableCell>
              <StyledTableCell align="right">{row.productprice}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.shippingAddress}</StyledTableCell>
              <StyledTableCell align="right">{row.totalPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.oderAt}</StyledTableCell>
              <div className='king'>
              <DeleteIcon className='iconx delete' onClick={() => handleDeleted(row._id)} />
            
              </div>
              
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
   
    </>
    
  );
}