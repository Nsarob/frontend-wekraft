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





export default function CustomerTables() {
  const [users,setUsers]= useState(null)

  const handleDeleted = async (itemsId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://wekraft-c156ff639ea6.herokuapp.com/API/user/delete/${itemsId}`, {
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

        // Check if the response contains a message property
        const message = data?.message || 'Item deleted successfully!';

        // Store the message in local storage
        localStorage.setItem('deletedMessage', message);

        // Reload the page
        window.location.reload();
    } catch (error) {
        console.error('Error deleting item:', error);
        alert(error.message);
    }
}


  useEffect(()=>{
    const fetchDatas = async () =>{
     try {
      const token = localStorage.getItem('token')
       const response = await axios.get(`https://wekraft-c156ff639ea6.herokuapp.com/API/user/get`,{
     headers: {
      'auth-token':token,
      'Content-Type': 'application/json',
     }
       })
       setUsers(response.data);
       // console.log(response.data)
     } catch (error) {
      alert(error.response.data.message)
     }
    };
    fetchDatas([])
  },[])
  return (
    <>
    <div className='items'>
    <h1>USER SIGNED IN</h1>
    </div>
   
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell style={{fontSize:'1.8rem'}}>NO</StyledTableCell>
            <StyledTableCell style={{fontSize:'1.8rem'}}>FIRST NAME</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>LAST NAME</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>EMAIL</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>ROLE</StyledTableCell>
            
           
            <StyledTableCell align="center" style={{fontSize:'1.4rem',backgroundColor:'#fdc800'}} colSpan={2}>OPTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {users && users.datas && users.datas.map((row, index) => (
    <StyledTableRow key={row.name}>
      <StyledTableCell component="th" scope="row">
        {index + 1} 
      </StyledTableCell>
      <StyledTableCell align="right">{row.firstname}</StyledTableCell>
      <StyledTableCell align="right">{row.lastname}</StyledTableCell>
      <StyledTableCell align="right">{row.email}</StyledTableCell>
      <StyledTableCell align="right">{row.role}</StyledTableCell>
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