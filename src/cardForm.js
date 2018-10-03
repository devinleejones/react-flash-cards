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

export default function CardForm(props) {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <span style={styles.border}>
        <h1 style={styles.title}>Create a Flash Card</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="form-group m-4 pt-4">
            <label htmlFor="exampleQuestion">Question</label>
            <input
              name="question"
              type="question"
              value={props.value}
              className="form-control"
              placeholder="Input a Question"
            />
          </div>
          <div className="form-group m-4">
            <label htmlFor="exampleAnswer">Answer</label>
            <input
              name="answer"
              type="answer"
              value={props.value}
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
