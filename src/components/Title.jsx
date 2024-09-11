import React from 'react'

export const Title = ({ name, bg }) => {
  return (
    <>
    <h1 className={`p-8 text-2xl text-center text-white`} style={{ backgroundColor: bg }}>{name}</h1>
    </>
  )
}
