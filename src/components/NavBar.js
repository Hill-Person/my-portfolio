import React from "react"
import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons"

export default function Navbar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">

          <NavLink to="/" exact
          activeClassName="text-gray"
          className="inflex-flex items-center py-3 px-6 mr-4 text-green-100 hover:text-gray-800 text-4xl cursive tracking-widest">
            Ty Barker
          </NavLink>
          <NavLink to="/post"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-gray-800"
          activeClassName="text-green-100 bg-green-700"
          >
            Blog Posts
          </NavLink>
          <NavLink to="/project"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-gray-800"
          activeClassName="text-green-100 bg-green-700"
          >
            Projects
          </NavLink>
          <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-gray-800"
          activeClassName="text-green-100 bg-green-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div>

        </div>
      </div>
    </header>
  )
}
