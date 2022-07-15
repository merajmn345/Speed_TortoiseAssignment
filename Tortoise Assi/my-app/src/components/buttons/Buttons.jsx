import React from 'react'


const Buttons = (props) => {
  return (
    <>
        <button id="reset-btn"
            className="btn btn-color text-white"
            type="button"
            onClick={() => {
                props.isActive  ? props.handleReset() : props.handleStart()
            }}
        >
            {props.isActive ? 'Reset' : 'Start'}
        </button>
    </>
  )
}

export default Buttons