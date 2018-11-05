import React from 'react'

const style = {
  menu: {
    border: '2px solid black',
    width: '40rem'
  },
  p: {
    fontWeight: 'bold',
    fontSize: '36px'
  },
  p2: {
    fontSize: '36px'
  },
  edit: {
    cursor: 'pointer'
  },
  delete: {
    cursor: 'pointer'
  },
  a: {
    color: 'black'
  },
  h1: {
    fontSize: '42px',
    fontWeight: 'bold'
  },
  hr: {
    border: 'solid 2px',
    backgroundColor: 'black',
    height: '2px'
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
              <hr style={style.hr} />
              <p style={style.p2}>{card.answer}</p>
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
