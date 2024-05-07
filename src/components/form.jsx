import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './button';


export default function Form() {
  return (
    <>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '28ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          label="Full name"
          id="standard-size-small"
          
          variant="standard"
          className='field'
        />
        <TextField
          label="School name"
          id="standard-size-normal"
         
          variant="standard"
          className='field'
        />
      <div>
        <TextField
          label="email"
          id="standard-size-small"
        
          variant="standard"
          className='field'
        />
        <TextField
          label="phone"
          id="standard-size-normal"
          
          variant="standard"
          className='field'
        />
      </div>
      <div className='sample'>
    <select  className='select'>
      <option>select province</option>
      <option>eastern province</option>
      <option>sourthern province</option>
      <option>western province</option>
      <option>northern province</option>
    </select>
        <TextField
          label="what course is intrested?"
          id="standard-size-normal"
        
          variant="standard"
          className='field'
        />
      </div>
      <TextField
          label="Share with us your question, feedback, and Inquiries"
          id="standard-size-normal"
        
          variant="standard"
          className='message'
        />
    </Box>
    <Button name="contact" backgrounds ='#00043b' textColor='#ffff'/>
    </>
  );
}