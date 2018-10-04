import React from 'react'

const styles = {
  position: {
    width: '25rem'
  },
  button: {
    border: '2px solid black',
    height: '2.5rem',
    transform: 'translateY(2rem)',
    boxShadow: '2px 2px 2px rgb(0, 0, 0)',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  text: {
    marginTop: '10rem'
  }
}

export default function Cards() {
  return (
    <div className="mx-auto text-center" style={styles.position}>
      <h1 style={styles.text}>You have no flash cards</h1>
      <button type="submit" style={styles.button}>
        Make One
      </button>
    </div>
  )
}
