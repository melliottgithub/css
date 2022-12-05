import React from 'react'
import './index.css'
import Section from './Section'

const list = [
  { id: 1, src: '/typography-img/1 (2).jpg', alt: 'cat', title: 'This is a really important topic about cats that must be read', author: 'Mr Cat' },
  { id: 2, src: '/typography-img/1 (10).jpg', alt: 'giraffe', title: 'This is a really important topic about giraffes that must be read', author: 'Mr Giraffe' },
  { id: 3, src: '/typography-img/1 (14).jpg', alt: 'fox', title: 'This is a really important topic about foxes that must be read', author: 'Mr Fox' }
]

const Typography = () => {
  return (
    <main>
      <h1 id="main-heading">Some Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia
      </p>
      <div className="all-content">
        {list && list.map((el) =>
          <Section
            key={el.id}
            id={el.id}
            src={el.src}
            alt={el.alt}
            title={el.title}
            author={el.author}
          />)}
      </div>
    </main>
  )
}

export default Typography