import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <h1>
        <NavLink to="/" >Router Mission Blog</NavLink>
      </h1>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/posts" className={({ isActive }) => isActive ? "active" : ""}>Posts</NavLink>
        <NavLink to="/posts/new" className={({ isActive }) => isActive ? "active" : ""}>Write</NavLink>
      </nav>
    </header>

  )
}