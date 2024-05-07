import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    schoolname: "",
    course:"",
    phonenumber: "",
    message: "",
    province: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, province: value });
  };

  const handleSubmit = async () => {
    try {
      const api = "https://masterkraft-bn.onrender.com/API/contact/post";
      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert(`thank you ${response.data.datas.fullname} you message was sent`);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  const onFinish = () => {
    handleSubmit();
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label="FullName"
      >
        <Input name="fullname" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input name="email" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        label="School-Name"
      >
        <Input name="schoolname" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        label="Phone-Number"
      >
        <Input name="phonenumber" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        label="Course"
      >
        <Input name="course" onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Select your province">
        <Select onChange={handleSelectChange}>
          <Select.Option value="Eastern province">Eastern province</Select.Option>
          <Select.Option value="Western province">Western province</Select.Option>
          <Select.Option value="Sourthern province">Southern province</Select.Option>
          <Select.Option value="Northern province">Northern province</Select.Option>
          <Select.Option value="Kigali city">Kigali city</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea name="message" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
         GET IN TOUCH
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contacts;
