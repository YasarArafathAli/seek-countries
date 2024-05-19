import React, { useState } from 'react';
import axiosInstance, { ApiRoutes } from '../interceptor/axiosInstance';


const AppService = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCountries = () => {
    setLoading(true);
    axiosInstance.get(ApiRoutes.ALL).then(res => {
      console.log(res)
      setCountries(res.data)
    })
  };
  return {
    countries,
    loading,
    fetchCountries
  };
};

export default AppService;
