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
    transform: 'translateX(11rem)'
  }
}

export default function CardList(props) {
  return (
    <div>
      <h1 className="m-4">Card List</h1>
      <ul>
        {props.cards.map((card, index) => {
          return (
            <li key={index} className="list-group-item m-4" style={style.menu}>
              <p style={style.p}>{card.question}</p>
              <p style={style.p}>{card.answer}</p>
              <i className="far fa-edit" style={style.edit} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
