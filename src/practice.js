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
    fontSize: '28px'
  },
  previous: {
    transform: 'translateY(4.5rem) translateX(-2rem)',
    cursor: 'pointer'
  },
  next: {
    transform: 'translateY(-4rem) translateX(31rem)',
    position: 'd-inline',
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
        <span>
          <i
            style={styles.next}
            onClick={this.changeFlashCard}
            id="next"
            className="fas fa-greater-than fa-lg"
          />
        </span>
      </div>
    )
  }
}
