import React, { useContext, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import StarWishWallet from '../../components/StarWishWallet/StarWishWallet';
import BackButton from '../../components/BackButton/BackButton';
import tokenContext from '../../context/Context';
import { useForm } from "react-hook-form";
import './style.css';
import { useHistory } from 'react-router-dom';

function EditToken() {
  const { tokenToBeEdited } = useContext(tokenContext);
  const { token, balance, index } = tokenToBeEdited;
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const currentStorageItems = JSON.parse(localStorage.getItem('items'));
    currentStorageItems[index].token = data.token;
    currentStorageItems[index].balance = data.balance;
    localStorage.setItem('items', JSON.stringify(currentStorageItems));
    history.push('/');
  };

  const removeToken = () => {
    const currentStorageItems = JSON.parse(localStorage.getItem('items'));
    const updatedItems = currentStorageItems.filter((elem) => elem.token !== token);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    history.push('/');
  };

  const removeAlert = () => {
    return(
      <div className="remove-alert">
        <p>Are you sure?</p>
        <div className="alert-buttons">
          <button className="yes-btn" onClick={() => removeToken()}>Yes</button>
          <button className="cancel-btn" onClick={() => setShowAlert(false)}>Cancel</button>
        </div>
      </div>
    )
  }

  return(
    <div>
      <Logo />
      <StarWishWallet />
      <div className="header">
        <h4>Edit Token</h4>
        <BackButton />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <p className="token-text">Token</p>
        <input
        type="text"
        defaultValue={token}
        {...register("token")}
        />
        <p className="balance-text">Balance</p>
        <input
        type="number"
        defaultValue={balance}
        {...register("balance")}
        />
      </div>
      
      <div className="buttons">
        <button
        type="button"
        className="remove"
        onClick={() => setShowAlert(true)}
        >
          Remove
        </button>
        <button
        type="submit"
        className="save"
        >
          Save
        </button>
      </div>
      </form>
      {showAlert && removeAlert()}
    </div>
  );
};

export default EditToken;
