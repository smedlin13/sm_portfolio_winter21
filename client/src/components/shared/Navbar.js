import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/skills'>
            <li>Skills</li>
          </Link>
          <Link to='/portfolio'>
            <li>Portfolio</li>
          </Link>
          <Link to='/contacts'>
            <li>Contact</li>
          </Link>
          <Link to='/blogs'>
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;