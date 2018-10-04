import React, { Component, Fragment } from 'react'
import CardForm from './cardForm'
import CardList from './cardList'
import NavBar from './navBar'
import Cards from './cards'
import hash from './hash'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path } = hash.parse(location.hash)
    this.state = {
      view: { path },
      cards: []
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
          answer: form.get('answer')
        },
        ...this.state.cards
      ]
    })
    event.target.reset()
  }

  renderView() {
    const { path } = this.state.view
    switch (path) {
      case 'cards':
        const { cards } = this.state
        if (cards.length > 0) {
          return <CardList cards={cards} />
        }
        else {
          return <Cards />
        }
      case 'new':
        const { handleSubmit } = this
        return <CardForm handleSubmit={handleSubmit} />
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
      })
    })
    window.addEventListener('beforeunload', () => {
      const { cards } = this.state
      const stateJson = JSON.stringify({ cards })
      localStorage.setItem(stateJson)
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
