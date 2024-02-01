import React from 'react'


const Home = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
      </header>
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        {/* content - start */}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-gray-500 md:mb-6 md:text-lg xl:text-xl">
            Very proud to introduce
          </p>
          <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
            Revolutionary way to build the web
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random.
          </p>
        </div>
        {/* content - end */}
        {/* image - start */}
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* image - end */}
      </section>
    </div>

  </div>
  
  )
}

export default Home