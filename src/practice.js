import React, { Component } from 'react'

const styles = {
  container: {
    margin: '0 auto',
    width: '500px',
    marginTop: '10rem'
  },
  menu: {
    border: '2px solid black',
    width: '30rem'
  },
  p: {
    fontWeight: 'bold',
    fontSize: '16px'
  },
  a: {
    color: 'black',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '42px'
  }
}

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0,
      showAnswer: false
    }
    this.showAnswer = this.showAnswer.bind(this)
  }

  showAnswer() {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  render() {
    const { showAnswer } = this.state
    const { cards } = this.props
    const answer = showAnswer ? '' : 'd-none'
    const answerButton = showAnswer ? 'Hide Answer' : 'Show Answer'
    return (
      <div style={styles.container}>
        <div className="card-body" style={styles.menu}>
          <h3 style={styles.title}>{cards[0].question}</h3>
          <a>
            <i
              onClick={this.showAnswer}
              className="fas fa-chevron-circle-down"
              style={styles.a}
            />
            {answerButton}
          </a>
          <p style={styles.p} className={`mt-2 ml-1 ${answer}`}>
            {cards[0].answer}
          </p>
        </div>
      </div>
    )
  }
}
