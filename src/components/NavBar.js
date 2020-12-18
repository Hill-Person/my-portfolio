import React from "react"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">

          <NavLink to="/" exact>
            Ty
          </NavLink>
          <NavLink to="/post">
            Blog Posts
          </NavLink>
          <NavLink to="/project">
            Projects
          </NavLink>
          <NavLink to="/about">
            About Me!
          </NavLink>

        </nav>
      </div>
    </header>
  )
}
