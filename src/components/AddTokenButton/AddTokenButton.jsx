import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'

function AddTokenButton() {
  const history = useHistory();

  return(
    <div className="add-token">
      <button
      type="button"
      className="add-token-btn"
      onClick={() => history.push('/add-token')}
      >
        Add Token
      </button>
    </div>
  )
}

export default AddTokenButton;
