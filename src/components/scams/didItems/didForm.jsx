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

const DidYou = () => {
  const [formData, setFormData] = useState({
    Title: '',
    Description: '',
  });

  const onFinish = async (values) => {
    try {
      const token = localStorage.getItem('token')
      const api = "https://masterkraft-bn.onrender.com/API/didyou/post";
      const response = await axios.post(api, {
        Title: formData.Title,
        Description: formData.Description,
      }, {
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data)

      alert("DID YOU KNOW successful posted!");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
  
        console.error('Error during API call:', error);
        alert("network error check your network.");
      }
    }
  };

  const onFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    <>
      <h1>DID YOU KNOW FORM</h1>
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
          name="Title"
          label="Title"
        
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Description"
          label="description"
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            DID YOU KNOW
          </Button>
        </Form.Item>
      </Form>
    </>

  );
};

export default DidYou;
