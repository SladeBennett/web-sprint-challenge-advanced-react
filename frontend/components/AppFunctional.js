import React, { useState } from 'react'
import axios from 'axios'
import { render } from '@testing-library/react'


const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4

export default function AppFunctional(props) {
  const [message, setMessage] = useState(initialMessage)
  const [email, setEmail] = useState(initialEmail)
  const [steps, setSteps] = useState(initialSteps)
  const [index, setIndex] = useState(initialIndex)

  let gridArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]


  function getXY(idx) {
    let x = (idx % 3) + 1
    let y = (Math.floor(idx / 3) + 1)
    getXYMessage(x, y)
    console.log(x, y)
    // It's enough to know what index the "B" is at, to be able to calculate the coordinates.
  }

  function getXYMessage(x, y) {
    let message = `Coordinates: (${x}, ${y})`
    return message;
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }


  function reset() {
    setMessage(initialMessage)
    setEmail(initialEmail)
    setSteps(initialSteps)
    setIndex(initialIndex)
  }

  function getNextIndex(direction) {

    if (direction === 'left') {
      if (index - 1 > -1) {
        setSteps(steps + 1)
        setIndex(index - 1)
      }
      getXY(index - 1)
    }
    if (direction === 'right') {
      if (index + 1 < 9) {
        setSteps(steps + 1)
        setIndex(index + 1)
      }
      getXY(index + 1)
    }
    if (direction === 'up') {
      if (index - 3 > -1) {
        setIndex(index - 3)
        setSteps(steps + 1)
      }
      getXY(index - 3)
    }
    if (direction === 'down') {
      if (index + 3 < 9) {
        setIndex(index + 3)
        setSteps(steps + 1)
      }
      getXY(index + 3)
    }
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  function move(evt) {
    let direct = evt.target.id
    getNextIndex(direct)
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    const { value } = evt.target;
    setEmail(value)
  }

  function onSubmit(evt) {
    evt.preventDefault()

    setEmail(initialEmail)
    // Use a POST request to send a payload to the server.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        {
          gridArr.map(idx => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input value={email} id="email" type="email" placeholder="type email" onChange={onChange}></input>
        <input id="submit" type="submit" onClick={onSubmit}></input>
      </form>
    </div>
  )
}
