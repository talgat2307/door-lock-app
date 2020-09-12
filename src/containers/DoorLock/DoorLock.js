import React from 'react';
import './DoorLock.css';
import { useDispatch, useSelector } from 'react-redux';


const DoorLock = () => {

  const password = useSelector((state => state.password));
  const text = useSelector((state => state.text));
  const dispatch = useDispatch();

  const logIn = (value) => dispatch({type: 'LOG_IN', value});

  const clear = () => dispatch({type: 'CLEAR'});

  const verify = () => dispatch({type: 'VERIFY'});

  return (
    <>
      <div className={'lock'}>
        <div className={'txt'}>{text}</div>
        <div>
          <input type='password' defaultValue={password} />
        </div>
        <div className='btn'>
          <button onClick={() => logIn(7)}>7</button>
          <button onClick={() => logIn(8)}>8</button>
          <button onClick={() => logIn(9)}>9</button>
          <button onClick={() => logIn(4)}>4</button>
          <button onClick={() => logIn(5)}>5</button>
          <button onClick={() => logIn(6)}>6</button>
          <button onClick={() => logIn(1)}>1</button>
          <button onClick={() => logIn(2)}>2</button>
          <button onClick={() => logIn(3)}>3</button>
          <button onClick={() => clear()}>{'<'}</button>
          <button onClick={() => logIn(0)}>0</button>
          <button onClick={() => verify()}>E</button>
        </div>
      </div>
    </>
  );
};

export default DoorLock;