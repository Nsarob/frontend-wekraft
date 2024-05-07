import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'antd';

export default function OrderUser() {
    const Params=window.location.href.split("?id=")[1]
    console.log(Params)
    const [formData, setFormData] = useState({
        quantity: 1,
        phoneNumber: '',
        email: '',
        shippingAddress: ''
    });
    const [selectedProductId, setSelectedProductId] = useState(null)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://masterkraft-bn.onrender.com/API/product/get`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const productsData = await response.json();
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleProductClick = (productId) => {
        setSelectedProductId(productId);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`https://masterkraft-bn.onrender.com/API/order/${Params}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": token
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit order');
            }

            const responseData = await response.json();
            alert(responseData.message); 
            setFormData({
                quantity: 1,
                phoneNumber: '',
                email: '',
                shippingAddress: ''
            });
        } catch (error) {
            alert('Error submitting order: ' + error.message);
            console.error('Error submitting order:', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                {products && products.datas && products.datas.map(product => (
                    <div key={product._id} onClick={() => handleProductClick(product._id)}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
                <TextField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label="Shipping Address"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    sx={{ m: 1, width: '25ch' }}
                />
                 <Button onClick={handleSubmit}>Order Now</Button>
            </div>
        </Box>
    );
}
