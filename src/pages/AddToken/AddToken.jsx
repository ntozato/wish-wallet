import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import Logo from '../../components/Logo/Logo';
import StarWishWallet from '../../components/StarWishWallet/StarWishWallet';
import './style.css';

function AddToken() {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [tokenExists, setTokenExists] = useState(false);
  const [show, setShow] = useState(false);
  const data = { token, balance };
  const history = useHistory();
  const storageItems = JSON.parse(localStorage.getItem('items'));
  const verifyIfTokenExists = storageItems && storageItems.some((elem) => elem.token === token);

  const tokenExistsMessage = () => {
    return(
      <div className="error-message">
        <p>Token already on wallet</p>
      </div>
    );
  };

  const handleTokenInputChange = (target) => {
    setShow(false);
    setTokenExists(false);
    setToken(target.value.toUpperCase().trim());
  }

  const handleBalanceInputChange = (target) => {
    setShow(false)
    setBalance(target.value);
  }

  const setLocalStorage = () => {
    if(!token || !balance) {
      return setShow(true);
    }
    if(verifyIfTokenExists) {
      setTokenExists(true);
    } else {
      localStorage.setItem(
        'items',
        JSON.stringify([...JSON.parse(localStorage.getItem('items')), data]));
        history.push('/');
    }
  }

  const showAlert = () => {
    return (
      <div className="alert">
        <h3>
          All fields must be filled.
        </h3>
      </div>
    );
  }

  return(
    <>
      <Logo />
      <StarWishWallet />
      <div className="form">
        <div className="header">
          <h4>Add Token</h4>
          <BackButton />
        </div>
        <div className="alert">
        </div>
        <div className="inputs">
          <p>Token</p>
          <input
          data-testid="input"
          type="text"
          onChange={({ target }) => handleTokenInputChange(target)}
          />
          {tokenExists && tokenExistsMessage()}
          <p>Balance</p>
          <input
          data-testid="input"
          type="number"
          onChange={({ target }) => handleBalanceInputChange(target)}
          />
        </div>
        <div className="save-btn-div">
          <button
          type="button"
          className="save-button"
          onClick={() => setLocalStorage()}
          >
            Save
          </button>
          <div className='show-alert'>
            {show && showAlert()}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default AddToken;
