import { Col } from 'antd';
import React from 'react'
import "./styles.css"
type Props = {
  name: string;
  population: number;
  region: string;
  capital:string;
  flag: {
    png: string;
    alt: string
  };
}

const CountryCard = ({name, population, region, capital, flag}: Props) => {
  return (
    <Col className='country-card'>
      <div>
      <img src={flag.png} alt={flag.alt} />
      </div>
      <h4>{name}</h4>
      <div>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </div>
    </Col>
  )
}

export default CountryCard