import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const UploadProduct = () => {
  const [upload, setUpload] = useState({
    productName: '',
    quantityAvailable: '',
    serialNumber: '',
    productPrice: '',
  });
  const [file, setFile] = useState(null);

  function handleFile(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  async function handleUpload() {
    if (!file) {
      message.error('Please select a file to upload.');
      return;
    }
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('productImage', file);
    formData.append('productName', upload.productName);
    formData.append('quantityAvailable', upload.quantityAvailable);
    formData.append('serialNumber', upload.serialNumber);
    formData.append('productPrice', upload.productPrice);

    const serverUrl = 'https://wekraft-c156ff639ea6.herokuapp.com/API/product/post';

    try {
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: { 'auth-token': token },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to upload product. Please try again.');
      }

      const result = await response.json();
      message.success('Product uploaded successfully');

      setUpload({
        productName: '',
        quantityAvailable: '',
        serialNumber: '',
        productPrice: '',
      });
      setFile(null);
    } catch (error) {
      console.error('Error:', error);
      message.error(error.message || 'Failed to upload product. Please try again.');
    }
  }

  const onFinish = () => {
    handleUpload();
  };

  return (
    <>
      <h1>UPLOAD PRODUCT</h1>
      <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item
          label="Upload Image"
          rules={[{ required: true, message: 'Please select an image' }]}
        >
          <Input type="file" name="productImage" onChange={handleFile} accept="image/*" />
        </Form.Item>
        <Form.Item label="Product Name" rules={[{ required: true, message: 'Please enter product name' }]}>
          <Input
            name="productName"
            value={upload.productName}
            onChange={(e) => setUpload({ ...upload, productName: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Quantity Available">
          <Input
            name="quantityAvailable"
            value={upload.quantityAvailable}
            onChange={(e) => setUpload({ ...upload, quantityAvailable: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Serial Number">
          <Input
            name="serialNumber"
            value={upload.serialNumber}
            onChange={(e) => setUpload({ ...upload, serialNumber: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Product Price">
          <Input
            name="productPrice"
            value={upload.productPrice}
            onChange={(e) => setUpload({ ...upload, productPrice: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <div className="btn">
            <Button type="primary" htmlType="submit">
              UPLOAD PRODUCT
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadProduct;
