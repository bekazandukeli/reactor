import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Root() {
  const location = useLocation();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about/beginning">Beginning</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq/5">FAQ</Link>
            </li>
            <li>
              <Link to="/users">User List</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{outline: '1px solid red'}}>
       <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  )
}
