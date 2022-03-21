import React from 'react';
import star from '../../assets/shooting-star.svg'
import './style.css'


function StarWishWallet() {
  return(
    <div data-testid="star-wish" className="star-title">
      <img src={ star } alt="star" className="star"/>
      <h2 className="title">Wish Wallet</h2>
    </div>
  );
}

export default StarWishWallet;
