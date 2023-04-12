import React from 'react'

const Book = (props) => {
  const clickHandler = () => {
    alert('You clicked')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  const { img, title, author } = props.book
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <p>{author}</p>
      <button type='button' onClick={clickHandler}>
        Read More
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        author
      </button>
    </article>
  )
}

export default Book
