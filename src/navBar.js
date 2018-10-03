import React from 'react'

const styles = {
  nav: {
    fontSize: '24px',
    fontWeight: 'bold'
  }
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav" style={styles.nav}>
          <a className="nav-item nav-link active" href="#cards">
            Cards <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link ml-2" href="#new">
            New
          </a>
        </div>
      </div>
    </nav>
  )
}
