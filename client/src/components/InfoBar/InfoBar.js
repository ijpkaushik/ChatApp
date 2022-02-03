import React from 'react';
import './infobar.css';

import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';

const InfoBar = ({ room }) => {
    return <div>
        <div className='infoBar'>
            <div className='innerContainer'>
                <img className='onlineIcon' src={onlineIcon} alt='online' />
                <h3>Room: <i>{room}</i> </h3>
                <a href="/" className='rightAlign'>
                    <img className='closeIcon' src={closeIcon} alt='close' />
                </a>
            </div>
        </div>
    </div>;
};

export default InfoBar;
