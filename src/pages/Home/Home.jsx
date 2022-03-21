import React, { useContext } from 'react';
import AddTokenButton from '../../components/AddTokenButton/AddTokenButton';
import Logo from '../../components/Logo/Logo';
import StarWishWallet from '../../components/StarWishWallet/StarWishWallet';
import tokenContext from '../../context/Context';
import { BiEdit } from "react-icons/bi";
import './style.css';
import { useHistory } from 'react-router-dom';

function Home() {
  const { setTokenToBeEdited } = useContext(tokenContext);
  const history = useHistory();
  const localStorageTokens = JSON.parse(localStorage.getItem('items'));

  const getTokenToBeEdited = (token, balance, index) => {
    const data = { token, balance, index };
    setTokenToBeEdited(data);
    history.push('/edit-token');
  }

  const renderTokens = () => {
    if (localStorageTokens && localStorageTokens.length > 0) {
      return localStorageTokens.map(({ token, balance }, index) => {
        return(
          <div key={token} className="info-tokens">
            <div className="icon-token">
              <div
              className="edit-icon"
              onClick={() => getTokenToBeEdited(token, balance, index)}
              >
                <BiEdit />
              </div>
              <h1>{token}</h1>
            </div>
            <div className="right-items">
              <h1>{balance}</h1>
            </div>
          </div>
        );
      });
    } else {
      return(
        <h3 className="no-token-message">You don't have any tokens yet.</h3>
      );
    };
  }

  return(
    <div className="content">
      <Logo />
      <div className="header">
        <StarWishWallet />
        <AddTokenButton />
      </div>
      <div className="titles">
        <h4>Tokens</h4>
        <h4 className="right-items">Balance</h4>
      </div>
      {renderTokens()}
    </div>
  );
}

export default Home;
