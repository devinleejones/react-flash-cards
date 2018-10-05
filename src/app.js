import React, { Component, Fragment } from 'react'
import CardForm from './cardForm'
import CardList from './cardList'
import NavBar from './navBar'
import Cards from './cards'
import hash from './hash'
import Edit from './edit'
import uuidv1 from 'uuid/v1'

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
  }

  renderView() {
    const { path, params } = this.state.view
    const { cards } = this.state
    switch (path) {
      case 'cards':
        if (cards.length > 0) {
          return <CardList cards={cards} />
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
