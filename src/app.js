import React, { Component } from 'react'
import CardForm from './cardForm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {},
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

  render() {
    const { handleSubmit } = this
    return (
      <div>
        <CardForm handleSubmit={handleSubmit} />
      </div>
    )
  }
}
