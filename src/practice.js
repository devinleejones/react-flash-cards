import React, { Component } from 'react'

const styles = {
  container: {
    margin: '0 auto',
    width: '500px',
    marginTop: '10rem',
    position: 'relative'
  },
  menu: {
    border: '2px solid black',
    width: '31.25rem'
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
    fontSize: '36px'
  },
  previous: {
    position: 'absolute',
    top: '3.25rem',
    left: '-3rem',
    margin: '0',
    cursor: 'pointer'
  },
  next: {
    position: 'absolute',
    top: '3.25rem',
    right: '-3rem',
    margin: '0',
    cursor: 'pointer'
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
    this.changeFlashCard = this.changeFlashCard.bind(this)
  }

  showAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  changeFlashCard(event) {
    const targetCard = event.target.id
    const { currentCard } = this.state
    const { cards } = this.props
    if (cards.length - 1 > currentCard) {
      if (targetCard === 'previous' && currentCard > 0) {
        this.setState({
          currentCard: currentCard - 1,
          showAnswer: false
        })
      }
      else if (targetCard === 'next') {
        this.setState({
          currentCard: currentCard + 1,
          showAnswer: false
        })
      }
    }
    else if (cards.length - 1 === currentCard) {
      if (targetCard === 'previous') {
        this.setState({
          currentCard: currentCard - 1,
          showAnswer: false
        })
      }
      else {
        this.setState({ currentCard: 0, showAnswer: false })
      }
    }
  }

  render() {
    const { currentCard, showAnswer } = this.state
    const { cards } = this.props
    const answer = showAnswer ? '' : 'd-none'
    const answerButton = showAnswer ? 'Hide Answer' : 'Show Answer'
    return (
      <div style={styles.container}>
        <div className="progress mb-4">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '25%' }}
          />
        </div>
        <i
          style={styles.previous}
          onClick={this.changeFlashCard}
          id="previous"
          className="fas fa-less-than fa-lg"
        />
        <div className="card-body" style={styles.menu}>
          <h3 style={styles.title}>{cards[currentCard].question}</h3>
          <a>
            <i
              onClick={this.showAnswer}
              className="fas fa-chevron-circle-down"
              style={styles.a}
            />
            {answerButton}
          </a>
          <p style={styles.p} className={`mt-2 ml-1 ${answer}`}>
            {cards[currentCard].answer}
          </p>
        </div>
        <i
          style={styles.next}
          onClick={this.changeFlashCard}
          id="next"
          className="fas fa-greater-than fa-lg"
        />
      </div>
    )
  }
}
