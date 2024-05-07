import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onFinish = async (values) => {
    try {
      const api = "https://masterkraft-bn.onrender.com/API/user/login";
      const response = await axios.post(api, {
        email: formData.email,
        password: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const token = response.data.token;
      const role = response.data.data.user.role;

      if (!token) {
        alert("No token provided. User cannot access the dashboard.");
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      alert("Login successful!");

      if (role === 'admin') {
        window.location.href='./dashboard'
      } else {
        window.location.href='./wekraft'
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.error('Error during API call:', error);
        alert("Network error. Check your network connection.");
      }
    }
  };

  const onFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    <>
      <h1>LOGIN FORM</h1>
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
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            LOGIN-NOW
          </Button>
        </Form.Item>
      </Form>
    </>

  );
};

export default Login;
