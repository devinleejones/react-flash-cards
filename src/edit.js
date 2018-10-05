import React from 'react'

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
  },
  input: {
    border: 'solid black',
    fontWeight: 'bold',
    height: '3rem'
  },
  button: {
    border: '2px solid black',
    transform: 'translateY(0.5rem) translateX(17rem)',
    boxShadow: '2px 2px 2px rgb(0, 0, 0)',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
}

export default function Edit(props) {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div style={styles.border}>
        <h1 style={styles.title}>Edit a Flash Card</h1>
        <form onSubmit={props.updateCard}>
          <div className="form-group m-4 pt-4">
            <input name="id" type="hidden" defaultValue={props.card.id} />
            <label htmlFor="exampleQuestion">Question</label>
            <input
              style={styles.input}
              name="question"
              type="text"
              defaultValue={props.card.question}
              id="exampleQuestion"
              className="form-control"
              placeholder="Input a Question"
            />
          </div>
          <div className="form-group m-4">
            <label htmlFor="exampleAnswer">Answer</label>
            <input
              style={styles.input}
              name="answer"
              type="text"
              defaultValue={props.card.answer}
              id="exampleAnswer"
              className="form-control"
              placeholder="Input an Answer"
            />
          </div>
          <button type="submit" style={styles.button}>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
