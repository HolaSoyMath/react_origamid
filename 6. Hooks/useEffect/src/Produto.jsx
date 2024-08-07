import React from 'react'

const Produto = () => {
  function handleScroll (event) {
    console.log(event)
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{height: '200vh'}} >Meu produto</div>
  )
}

export default Produto