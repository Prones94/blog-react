import React from 'react'
import Card from '../UI/Card'
import Logo from '../Logo'
import Navbar from '../Navbar'
import './style.css'

const Hero = props => {
  return (
    <div>
      <Card>
        <div style = {styles.div}>
        <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  )
}

export default Hero

const styles = {
  div: {
    padding: '50px 0',

  }
}