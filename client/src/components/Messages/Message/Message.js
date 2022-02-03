import React from 'react';
import ReactEmoji from 'react-emoji';
import './message.css';

const Message = ({ msgData: { user, text, time }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user == trimmedName) {
        isSentByCurrentUser = true;
    }

    console.log('trimmedName: ' + trimmedName + ' user: ' + user)

    return (
        isSentByCurrentUser
            ? (
                <>
                    <div className="messageContainer justifyEnd">
                        <div className="messageBox backgroundBlue">
                            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                        </div>
                    </div>
                    <p className="sentText justifyEnd" >{trimmedName} {time}</p>
                </>
            )
            : (
                <>
                    <div className="messageContainer justifyStart">
                        <div className="messageBox backgroundLight">
                            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                        </div>
                    </div>
                    <p className="sentText justifyStart">{user} {time}</p>
                </>
            )
    );
}

export default Message;