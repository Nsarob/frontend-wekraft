import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const UploadTearm = () => {
  const [upload, setUpload] = useState({
    personName: '',
    personWork: '',
  });

  const [file, setFile] = useState(null);

  function handleFile(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  function handleUpload() {
    if (!file) {
      message.error('Please select a file to upload.');
      return;
    }
// const token = localStorage.getItem('token')
    const formData = new FormData();
    formData.append('teamImage', file);

    // Append other form data fields
    formData.append('personName', upload.personName);
    formData.append('personWork', upload.personWork);

    fetch('https://masterkraft-bn.onrender.com/API/team', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
       try {
         if (!response.ok) {
           throw new Error('Failed to upload product. Please try again.');
         }
       } catch (error) {
        alert(error.response.data.message)
       }
        return response.json();
      
      })
      .then((result) => {
        
        message.success(`member uploaded successfully`);
        setUpload({
        personName: '',
        personWork: '',
         
        });
        setFile(null);
      })
      .catch((error) => {
        console.error('error', error);
        message.error(error.message || 'Failed to upload product. Please try again.');
      });
  }

  const onFinish = () => {
    
    handleUpload();
  };

  return (
    <>
      <h1>UPLOAD OUR TEARM</h1>
      <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item
          label="Upload Image"
          rules={[
            {
              required: true,
              message: 'Please select an image',
            },
          ]}
        >
          <Input type="file" name="teamImage" onChange={handleFile} accept="image/*" />
        </Form.Item>
        <Form.Item label="FULL_NAME" rules={[{ required: true, message: 'Please enter product name' }]}>
          <Input
            name="personName"
            value={upload.productName}
            onChange={(e) => setUpload({ ...upload, personName: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="POSITION">
          <Input
            name="personWork"
            value={upload.quantityAvailable}
            onChange={(e) => setUpload({ ...upload, personWork: e.target.value })}
          />
        </Form.Item>
      
    
        <Form.Item>
          <div className="btn">
            <Button type="primary" htmlType="submit">
              POST TEAM
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadTearm;