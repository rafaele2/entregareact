import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3>Compra Hard</h3>
          </Link>
          <div className="Categories">
              <NavLink to='/category/CPU' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Procesadores</NavLink>
              <NavLink to='/category/GPU' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Placas de Video</NavLink>
              <NavLink to='/category/Motherboard' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Motherboard</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar