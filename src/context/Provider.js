import React, { useEffect, useState } from 'react';
import tokenContext from './Context';

function Provider({ children }) {
  const [tokens, setTokens] = useState('');
  const [tokenToBeEdited, setTokenToBeEdited] = useState('');

  const fetchData = () => {
    const localStorageTokens = JSON.parse(localStorage.getItem('items'));
    if (!localStorageTokens) {
      return localStorage.setItem('items', JSON.stringify([]));
    } else {
      return localStorage.setItem('items', JSON.stringify(localStorageTokens));
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const data = {
    tokens,
    setTokens,
    tokenToBeEdited,
    setTokenToBeEdited
  };

  return (
    <tokenContext.Provider value={data}>
      {children}
    </tokenContext.Provider>
  );
}

export default Provider;
