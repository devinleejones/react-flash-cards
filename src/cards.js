import React from 'react'

const styles = {
  position: {
    width: '25rem'
  },
  a: {
    border: '2px solid black',
    height: '2.5rem',
    padding: '1rem',
    transform: 'translateY(2rem)',
    boxShadow: '2px 2px 2px rgb(0, 0, 0)',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '24px',
    color: 'black'
  },
  text: {
    marginTop: '10rem',
    marginBottom: '2rem'
  }
}

export default function Cards() {
  return (
    <div className="mx-auto text-center" style={styles.position}>
      <h1 style={styles.text}>You have no flash cards</h1>
      <a href="#new" style={styles.a}>
        Make One
      </a>
    </div>
  )
}
