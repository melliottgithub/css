import React from 'react'
import Section from './Section';

const list = [
  {
    sect: 1,
    src: "/challenge-1-img/1 (5).jpg",
    alt: 'Dog',
    class: 'content',
    para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis, dolorem magnam ad tenetur quod eum aut beatae labore repudiandae quia atque voluptatem ab enim error praesentium? Omnis nostrum aliquam.'
  },
  {
    sect: 2,
    src: "/challenge-1-img/1 (13).jpg",
    alt: 'Moose',
    class: 'content',
    para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis, dolorem magnam ad tenetur quod eum aut beatae labore repudiandae quia atque voluptatem ab enim error praesentium? Omnis nostrum aliquam.'
  },
  {
    sect: 3,
    src: "/challenge-1-img/1 (15).jpg",
    alt: 'Owl',
    class: 'content',
    para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis, dolorem magnam ad tenetur quod eum aut beatae labore repudiandae quia atque voluptatem ab enim error praesentium? Omnis nostrum aliquam.'
  }
]

const Challenge1 = () => {
  return (
    <>
      {list && list.map((el) => {
        return (
          <Section
            key={el.sect}
            src={el.src} alt={el.alt}
            para={el.para}
            classx={el.class}
            sect={el.sect}
          />
        )
      })}
    </>
  )
}

export default Challenge1