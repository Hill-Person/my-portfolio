import React from "react"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">

          <NavLink to="/" exact
          activeClassName="text-gray"
          className="inflex-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-gray-800 text-4xl cursive tracking-widest">
            Ty
          </NavLink>
          <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-gray-800">
            Blog Posts
          </NavLink>
          <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-gray-800">
            Projects
          </NavLink>
          <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-gray-800">
            About Me!
          </NavLink>

        </nav>
      </div>
    </header>
  )
}
