import React, { Component } from 'react'

const styles = {
  border: {
    border: 'solid black',
    width: '40rem',
    height: '25rem',
    margin: '10rem'
  },
  title: {
    fontSize: '3rem',
    position: 'absolute',
    transform: 'translateY(-2rem) translateX(1.5rem)',
    backgroundColor: 'white'
  }
}

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <span style={styles.border}>
          <h1 style={styles.title}>Create a Flash Card</h1>
        </span>
      </div>
    )
  }
}
