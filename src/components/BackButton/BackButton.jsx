import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function BackButton() {
  const history = useHistory();

  return(
    <div className="back-btn-div">
      <button
      type="button"
      className="back-button"
      onClick={() => history.push('/')}
      >
        Voltar
      </button>
    </div>
  )
}

export default BackButton;
