import React from 'react'
import './index.css'
import Section from './Section';

const list = [
  { id: 1, src: '/contrast-scale-img/1 (19).jpg', title: 'Sheep', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores alias numquam consectetur hic, in natus iste, odit atque doloremque minus architecto aut, corrupti cum velit quam perferendis amet animi?' },
  { id: 2, src: '/contrast-scale-img/1 (20).jpg', title: 'Pig', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores alias numquam consectetur hic, in natus iste, odit atque doloremque minus architecto aut, corrupti cum velit quam perferendis amet animi?' },
  { id: 3, src: '/contrast-scale-img/1 (21).jpg', title: 'Cow', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores alias numquam consectetur hic, in natus iste, odit atque doloremque minus architecto aut, corrupti cum velit quam perferendis amet animi?' },
]

const Scale = () => {
  return (
    <div id="main-content">
      {list && list.map((el) => <Section key={el.id} src={el.src} title={el.title} id={el.id} content={el.content} />)}
    </div>
  )
}

export default Scale