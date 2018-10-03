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
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const form = event.target
    this.setState({
      [form.name]: form.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    event.target.reset()
  }
  render() {
    const { handleChange } = this
    const { handleSubmit } = this
    const { value } = this.state
    return (
      <div className="container-fluid d-flex justify-content-center">
        <span style={styles.border}>
          <h1 style={styles.title}>Create a Flash Card</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group m-4 pt-4">
              <label htmlFor="exampleQuestion">Question</label>
              <input
                name="question"
                type="question"
                value={value}
                onChange={handleChange}
                className="form-control"
                placeholder="Input a Question"
              />
            </div>
            <div className="form-group m-4">
              <label htmlFor="exampleAnswer">Answer</label>
              <input
                name="answer"
                type="answer"
                value={value}
                onChange={handleChange}
                className="form-control"
                placeholder="Input an Answer"
              />
            </div>
            <button type="save">Save</button>
          </form>
        </span>
      </div>
    )
  }
}
