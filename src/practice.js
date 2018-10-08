import React, { Component } from 'react'
import hash from './hash'

const styles = {
  border: {
    border: 'solid black',
    width: '40rem',
    height: '25rem',
    margin: '10rem'
  },
  menu: {
    border: '2px solid black',
    width: '15rem'
  },
  p: {
    fontWeight: 'bold',
    fontSize: '36px'
  },
  a: {
    color: 'black'
  },
  button: {
    cursor: 'pointer'
  }
}

export default class Practice extends Component {
  constructor(props) {
    super(props)
    const stateJson = localStorage.getItem('view-app-state')
    const appState = JSON.parse(stateJson) || {}
    const { path, params } = hash.parse(location.hash)
    this.state = {
      view: { path, params },
      cards: appState.cards || []
    }
  }

  render() {
    const { cards } = this.state
    return (
      <div className="container-fluid d-flex justify-content-center">
        <ul>
          {cards.map((card, index) => {
            return (
              <li
                key={index}
                className="list-group-item m-4"
                style={styles.menu}>
                <p style={styles.p}>{card.question}</p>
                <a>
                  <i
                    style={styles.button}
                    className="fas fa-chevron-circle-down mr-1"
                    onClick={() => card.answer}
                  />
                  Show Answer
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
