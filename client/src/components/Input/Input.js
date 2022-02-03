import React from 'react';

import './input.css';

const Input = ({ setMessage, sendMessage, message }) => (
    <div>
        <form className='flex-container'>
            <div className='flex-child-1'>
                <input
                    className="input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
            <div className='flex-child-2'>
                <button className="sendMsgButton" onClick={e => sendMessage(e)}>SEND</button>
            </div>
        </form>

    </div>
)

export default Input;