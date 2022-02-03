import React from 'react';
import { Link } from 'react-router-dom';
import './join.css';

const Join = ({ setName, setRoom }) => {
  return (
    <div className='joinOuterContainer'>
      <form className='form'>
        <h1 className='heading'>Join a ROOM</h1>
        <div>
          <input
            className='joinInput'
            placeholder='Name...'
            type='text'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className='joinInput'
            placeholder='Room...'
            type='text'
            onChange={(e) => setRoom(e.target.value)}
            required
          />
        </div>
        <Link
          // onClick={e => (!name || !room) ? e.preventDefault() : null}
          to='/chat'
        >
          <button className='joinButton' type='submit'>
            SIGN IN
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Join;
