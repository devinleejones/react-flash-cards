import React, { Component, Fragment } from 'react'
import CardForm from './cardForm'
import CardList from './cardList'
import NavBar from './navBar'
import Cards from './cards'
import hash from './hash'
import Edit from './edit'
import uuidv1 from 'uuid/v1'
import Practice from './practice'

export default class App extends Component {
  constructor(props) {
    super(props)
    const stateJson = localStorage.getItem('view-app-state')
    const appState = JSON.parse(stateJson) || {}
    const { path, params } = hash.parse(location.hash)
    this.state = {
      view: { path, params },
      cards: appState.cards || []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    this.setState({
      cards: [
        {
          question: form.get('question'),
          answer: form.get('answer'),
          id: uuidv1().slice(0, 5)
        },
        ...this.state.cards
      ]
    })
    event.target.reset()
    location.hash = 'cards'
  }

  deleteCard(id) {
    const { cards } = this.state
    const removedCard = cards.filter(card => card.id !== id)
    this.setState({ cards: removedCard })
    console.log(removedCard)
    location.hash = 'cards'
  }

  updateCard(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    const question = form.get('question')
    const answer = form.get('answer')
    const id = form.get('id')
    const newCard = {}
    const cards = this.state.cards.slice()
    newCard.question = question
    newCard.answer = answer
    newCard.id = id
    function compareIds(card) {
      if (card.id === newCard.id) {
        return true
      }
      else {
        return false
      }
    }
    const cardIndex = cards.findIndex(compareIds)
    cards[cardIndex] = newCard
    this.setState({
      cards: cards
    })
    location.hash = 'cards'
  }

  renderView() {
    const { path, params } = this.state.view
    const { cards } = this.state
    const { deleteCard } = this
    switch (path) {
      case '':
        if (cards.length > 0) {
          return <CardList cards={cards} deleteCard={deleteCard} />
        }
        else {
          return <Cards />
        }
      case 'cards':
        if (cards.length > 0) {
          return <CardList cards={cards} deleteCard={deleteCard} />
        }
        else {
          return <Cards />
        }
      case 'new':
        const { handleSubmit } = this
        return <CardForm handleSubmit={handleSubmit} />
      case 'edit':
        const { updateCard } = this
        const filteredCards = cards.filter(card => card.id === params.cardId)
        const card = filteredCards[0]
        return <Edit card={card} updateCard={updateCard} />
      case 'practice':
        if (cards.length > 0) {
          return <Practice cards={cards} />
        }
        else {
          return <Cards />
        }
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        view: { path, params }
      })
    })
    window.addEventListener('beforeunload', () => {
      const { cards } = this.state
      const stateJson = JSON.stringify({ cards })
      localStorage.setItem('view-app-state', stateJson)
    })
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        {this.renderView()}
      </Fragment>
    )
  }
}
