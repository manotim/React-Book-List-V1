import React from 'react'
import ReactDOM from 'react-dom'
import { books } from './books'
import Book from './Book'
import { greeting } from './testing/testing'

//CSS
import './style.css'
// function BookList() {
//   return <h4>hello world, it is mike here leearning react once again!</h4>
// }

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
