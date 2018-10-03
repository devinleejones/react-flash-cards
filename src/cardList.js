import React from 'react'

export default function CardList(props) {
  return (
    <div>
      <h1>Card List</h1>
      <ul>
        {props.cards.map((card, index) => {
          return (
            <li key={index}>
              <p>{card.question}</p>
              <p>{card.answer}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
