import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Spin, Modal, Input } from "antd";
import DeleteIcon from '@mui/icons-material/Delete';

function Email() {
    const [email, setEmail] = useState(null);
    const [replyMessage, setReplyMessage] = useState(""); // State to hold the reply message
    const [replyModalVisible, setReplyModalVisible] = useState(false); // State to control the visibility of the reply modal
    const [emailToReply, setEmailToReply] = useState(""); // State to hold the email to reply to

    const handleDeleted = async (itemsId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`https://masterkraft-bn.onrender.com/API/contact/delete/${itemsId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
    
            if (!response.ok) {
                throw new Error(`Failed to delete item with ID ${itemsId}`);
            }
    
            const data = await response.json();
            const message = data?.message || 'Item deleted successfully!';
            localStorage.setItem('deletedMessage', message);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting item:', error);
            alert(error.message);
        }
    }
    

    const handleReply = (email) => {
       
        setEmailToReply(email);
        setReplyModalVisible(true);
         const newUrl = `${window.location.origin}?id=${email}`;
         window.history.pushState(null, null, newUrl);
        
    }
    const handleReplyChange = (event) => {
        setReplyMessage(event.target.value);
    }
    const handleSendReply = async (itemsId) => {
        const Params=window.location.href.split("?id=")[1]
        console.log(Params)
        try {
            await axios.post(`https://masterkraft-bn.onrender.com/API/reply/${Params}`, {
                recipientEmail: emailToReply,
                replyMessage
            });

            alert('Reply email sent successfully!');
            setReplyModalVisible(false);
            setReplyMessage("");
        } catch (error) {
            console.error('Error sending reply email:', error);
        }
    }

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://masterkraft-bn.onrender.com/API/contact/get', {
                    headers: {
                        'auth-token':token,
                        'Content-Type': 'application/json',
                    }
                });
                setEmail(response.data.datas.reverse());
            } catch (error) {
                alert(error.response.data.message)
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessage();
    }, []);

    return (
        <div className="message-container">
            <div className="message-cont">
                <div className="messagex">
                    <div className="messax">
                        {email ? (
                            email.map((message, index) => (
                                <div key={index}>
                                    <h4>{index + 1}</h4> 
                                    <h3>fullname:<span>{message.fullname}</span></h3>
                                    <h3>email:<b>{message.email}</b></h3>
                                    <h3>phone:<b>{message.phonenumber}</b></h3>
                                    <h3>province:<b>{message.province}</b></h3>
                                    <p>message: <b>{message.message}</b></p>
                                    <h3>course:<b>{message.course}</b></h3>
                                    <h3>schoolName:{message.schoolname}</h3>
                                    <DeleteIcon className='iconx delete' onClick={() => handleDeleted(message._id)} />
                                    <Button onClick={() => handleReply(message._id)}>Reply</Button>
                                </div>
                            ))
                        ) : (
                            <Spin />
                        )}
                    </div>
                </div>
            </div>
            {/* Reply Modal */}
            <Modal
                title="Compose Reply"
                open={replyModalVisible}
                onOk={handleSendReply}
                onCancel={() => setReplyModalVisible(false)}
                okText="Send"
                cancelText="Cancel"
            >
                <Input.TextArea
                    placeholder="Type your reply here..."
                    value={replyMessage}
                    onChange={handleReplyChange}
                />
            </Modal>
        </div>
    );
}

export default Email;