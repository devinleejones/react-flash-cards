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

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
      })
    })
  }

  render() {
    const { handleSubmit } = this
    const { cards } = this.state
    return (
      <Fragment>
        <NavBar />
        <CardForm handleSubmit={handleSubmit} />
        <CardList cards={cards} />
        <Cards />
      </Fragment>
    )
  }
}
