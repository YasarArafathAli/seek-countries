import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const CountryDetails = (props: Props) => {

  const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default CountryDetails