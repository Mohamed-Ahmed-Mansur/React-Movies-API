// apiContext.js
import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";

  const fetchData = async () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setApiData(data)
    });
  };

  return (
    <ApiContext.Provider value={{ apiData, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
