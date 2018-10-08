import React from 'react'

const style = {
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
    transform: 'translateX(10rem)',
    cursor: 'pointer'
  },
  a: {
    color: 'black'
  },
  h1: {
    fontSize: '42px',
    fontWeight: 'bold'
  }
}

export default function CardList(props) {
  return (
    <div>
      <h1 style={style.h1} className="m-4">
        Card List
      </h1>
      <ul>
        {props.cards.map((card, index) => {
          const id = card.id
          return (
            <li key={index} className="list-group-item m-4" style={style.menu}>
              <p style={style.p}>{card.question}</p>
              <p style={style.p}>{card.answer}</p>
              <a style={style.a} href={`#edit?cardId=${card.id}`}>
                <i className="far fa-edit" style={style.edit} />
              </a>
              <i
                className="far fa-trash-alt"
                style={style.delete}
                onClick={() => props.deleteCard(id)}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
