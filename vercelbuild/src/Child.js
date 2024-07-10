import React from 'react'

function Child(props) {
    return (
        <p>
            {props.msg}<br></br>
            {props.num}이 전달되었네요
        </p>
    )
}

export default Child
