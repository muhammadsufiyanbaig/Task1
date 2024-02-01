import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-md px-4 md:px-8">
    <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
      About us
    </h1>
    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
      This is a section of some simple filler text, also known as placeholder
      text. Filler text is dummy text which has no meaning
      however looks very similar to real text. The important factor when using
      filler text is that the text looks realistic otherwise it will not look
      very good.
    </p>
    <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
      “This is a section of some simple filler text, also known as placeholder
      text.”
    </blockquote>
    <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
      <img
        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
        loading="lazy"
        alt="Photo by Minh Pham"
        className="h-full w-full object-cover object-center"
      />
    </div>
    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
      Features
    </h2>
    <p className="text-gray-500 sm:text-lg">
      This is a section of some simple filler text, also known as placeholder
      text. It shares some characteristics of a real written text but is random
      or otherwise generated.
    </p>
  </div>
</div>

  )
}

export default About