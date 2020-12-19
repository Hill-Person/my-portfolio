import React from "react"
import image from "../pexels-johannes-plenio-1423600 copy.jpg"

export default function Home() {
  return (
    <main>

      <img  src={image} alt="Some Trees" className="absolute object-cover w-full h-full" />

      <section className="relative flex jusitfy-center min-h-screen pt-12 lg:pt-64 px-8">

        <h1 className="text-6xl text-green-800 font-bold leading-none lg:leading-snug home-name">Hello, I'm Ty Barker.</h1>

      </section>

    </main>
  )
}
