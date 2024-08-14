import React from 'react'

const Box = (props) => {
  let result;
  if (
    props.title === "computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win"
  } else {
    result = props.result
  }

  return (
    <div>
        <div className={`box ${result}`}>

            <h1>{props.title}</h1>

            <img src={props.item && props.item.img} alt="" />

            <h3>{result}</h3>

        </div>
    </div>
  )
}

export default Box