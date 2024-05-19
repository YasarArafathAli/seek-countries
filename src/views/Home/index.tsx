import React, { useEffect } from 'react';
import AppService from '../../services/app.services';
import CountryCard from '../../shared/CountryCard';
import { Row } from 'antd';

type Props = {};

function Home({}: Props) {
  const {fetchCountries, loading, countries} = AppService();
  useEffect(() => {
    fetchCountries()
  },[])
  return <Row justify={"space-around"}>
   {countries.map(((country: any )=> <CountryCard name={country?.name?.common} population={country?.population} region={country?.region} capital={country?.capital?.join(", ")} flag={country?.flags}></CountryCard>))}
  </Row>;
}

export default Home;

