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
import OrderTables from '../scams/orderItems/ordersForm';
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




export default function DashTables() {
  const [product, setProduct] = useState([])
  const [deleted, setDeleted] = useState(false)


  const handleDeleted = async (itemsId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`https://masterkraft-bn.onrender.com/API/product/delete/${itemsId}`,{
        method:'DELETE',
        headers :{
          'Content-Type': 'application/json',
          'auth-token' : token
        }
      }) 
if(response.ok){
  setProduct(product.filter(product => product.id !== itemsId));
  setDeleted(true)
  alert(`deleted successfully`)
}else{
  console.log(`fail to delete`)
}
if(deleted){
  alert(`deleted successfully`)
}
    } catch (error) {
      console.log('network error',error)
    }
  }

  useEffect(()=>{
    const fetchData = async () =>{
      const response = await axios.get(`https://masterkraft-bn.onrender.com/API/product/get`)
      setProduct(response.data)
    };
    fetchData([])

  },[])

  return (
    <>
    <div className='items'>
    <h1>IMPORT ITEMS TABLE</h1>

    </div>
   
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell style={{fontSize:'1.8rem'}}>NO</StyledTableCell>
          <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>NAME ITEMS</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>SERIAL NUMBER</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>SIZE/MARK</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>AMOUNT OF IMPORT</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>POSTEDATE</StyledTableCell>
            <StyledTableCell align="center" style={{fontSize:'1.4rem',backgroundColor:'#fdc800'}} colSpan={2}>OPTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product && product.datas && product.datas.map((row,index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.productName}</StyledTableCell>
              <StyledTableCell align="right">{row.productPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.quantityAvailable}</StyledTableCell>
              <StyledTableCell align="right">{row.serialNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.postAt}</StyledTableCell>
              <div className='king'>
              <DeleteIcon className='iconx delete' onClick={() => handleDeleted(row._id)} />
              </div>
              
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   <OrderTables/>
    </>
    
  );
}