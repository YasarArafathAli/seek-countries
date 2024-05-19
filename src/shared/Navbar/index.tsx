import React from 'react'
import "./styles.css"
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='row navbar-container'>
      <div className='col nav-title'><strong>Where in the world</strong></div>
      <div className='col'>{} mode</div>
    </div>
  )
}

export default Navbar