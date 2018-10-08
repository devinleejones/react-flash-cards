import React from 'react'

const styles = {
  border: {
    border: 'solid black',
    width: '40rem',
    height: '25rem',
    margin: '10rem'
  },
  menu: {
    border: '2px solid black',
    width: '15rem'
  },
  p: {
    fontWeight: 'bold',
    fontSize: '36px'
  },
  edit: {
    transform: 'translateX(9.5rem)'
  },
  delete: {
    transform: 'translateX(10rem)'
  },
  a: {
    color: 'black'
  }
}

export default function Practice(props) {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <ul>
        {props.cards.map((card, index) => {
          const id = card.id

          return (
            <li key={index} className="list-group-item m-4" style={styles.menu}>
              <p style={styles.p}>{card.question}</p>
              <p style={styles.p}>{card.answer}</p>
              <a style={styles.a} href={`#edit?cardId=${card.id}`}>
                <i className="far fa-edit" style={styles.edit} />
              </a>
              <i
                className="far fa-trash-alt"
                style={styles.delete}
                onClick={() => props.deleteCard(id)}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
