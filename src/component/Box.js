import React from 'react'

const Box = (props) => {
  return (
    <div>
        <div className='box'>

            <h1>{props.title}</h1>

            <img src={props.item && props.item.img} alt="" />

            <h3>{props.result}</h3>

        </div>
    </div>
  )
}

export default Box