import React from 'react'

export function Post(props) {
  return (
    <div>
        <strong>{props.name}</strong>
        <p>{props.text}</p>
    </div>
  )
}
