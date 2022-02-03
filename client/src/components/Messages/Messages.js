import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './messages.css';

const Messages = ({ messages, name }) => {
    return <div>
        <ScrollToBottom className='messages'>
            {
                messages.map((msgData) =>
                    <div key={msgData.message + msgData.time}>
                        <Message msgData={msgData}  name={name}/>
                    </div>)
            }
        </ScrollToBottom>
    </div>;
};

export default Messages;
