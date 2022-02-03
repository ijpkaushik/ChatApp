import React from 'react';

import onlineIcon from '../../assets/onlineIcon.png';

import './textContainer.css';

const TextContainer = ({ users }) => {

  return (
    <div className="textContainer">
      {
        users
          ? (
            <div>
              <h2>People currently chatting:</h2>
              <div className="activeContainer">
                <h2>
                  {users.map((user) => (
                    <div key={user.name} className="activeItem">
                      <img alt="Online Icon" src={onlineIcon} />
                      {user.name}
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          )
          : null
      }
    </div>
  )
};

export default TextContainer;