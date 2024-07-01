import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div  className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;