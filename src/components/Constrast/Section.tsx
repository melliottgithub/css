import React from 'react'

interface Props {
  src: string
  id: number
  title: string
  content: string
}

const Section = ({ src, id, title, content }: Props) => {
  return (
    <section className={`section section-${id}`}>
      <img src={src} alt={title} />
      <div className="content">
        <p>Nov 15, 2100</p>
        {/* <!--First of its kind--> */}
        <h3>{title}</h3>
        <p>
          {/* <!--(- * - => +)--> */}
          {content}
        </p>
      </div>
    </section>
  )
}

export default Section