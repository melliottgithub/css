import React from 'react'
import './index.css'

interface Props {
  src: string
  alt: string
  para: string
  classx: string
  sect: number
}

const Section = ({ src, alt, para, classx, sect }: Props) => {
  return (
    <section className={`section section-${sect}`}>
      <img src={src} alt={alt} />
      <div className={`${classx}`}>
        <p>Nov 10, 2100</p>
        <h3>{alt}</h3>
        <p>
          {para}
        </p>
      </div>
    </section>
  )
}

export default Section