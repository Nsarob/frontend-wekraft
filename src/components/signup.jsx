import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import {Modal} from 'antd';
import Login from './login';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dateofBirth: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [IsOpen, setIsOpen] = useState(false);
   

  const handleOpen = ()=>{
      setIsOpen(true)
  }
  const handleClose = () =>{
    setIsOpen(false)
}
  const onFinish = async(values) => {
    try {
      const api = "https://wekraft-c156ff639ea6.herokuapp.com/API/user/signup";
      const response = await axios.post(api, {
        firstname: formData.firstname,
        lastname: formData.lastname,
        dateofBirth:formData.dateofBirth,
        email: formData.email,
        password: formData.password,
        confirmpassword: formData.confirmpassword
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      alert(response.data.message)
      if (response.data) {
        window.location.href='./wekraft'
      } 
    } catch (error) {
  

      if (error.response) {
        alert( error.response.data.message);
      }
    }
  };

  const onFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
<>
<Modal open={IsOpen} onCancel={handleClose} footer = {null}>
    {
      setIsOpen && (
                  <Login/>
              )
  
    }
  
    </Modal>


    <div className='form-containerx'>
      <div className='form'>
        <h1>sign up form</h1>
        <Form
          {...layout}
          name="nest-messages"
          initialValues={formData}
          onFinish={onFinish}
          onValuesChange={onFormChange}
          style={{
            maxWidth: 600,
          }}
          className='formx'
        >
          <Form.Item
            name="firstname"
            label="FirstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="LastName"
          >
            <Input />
          </Form.Item>
          <Form.Item 
          name="dateofBirth"
          label="Date Of Birth For Child"
          
          >
            <Input placeholder='DD/MM/YY'/>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'Please input a valid email!',
              },
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            label="Confirm-Password"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              SIGN-UP
            </Button>
          </Form.Item>
         <p>if you don't have account?<button className='link btn up' onClick={handleOpen}>log in</button></p> 
        </Form>
      </div>
    </div>
</>
   
  );
};

export default SignUp;
