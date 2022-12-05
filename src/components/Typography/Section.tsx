import React from 'react'

interface Props {
  id: number
  src: string
  alt: string
  title: string
  author: string
}

const Section = ({ id, src, alt, title, author }: Props) => {
  return (
    <section className={`section section-${id}`}>
      <div className="content">
        <img src={src} alt={alt} />
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </section>
  )
}

export default Section