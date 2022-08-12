import {Link} from 'react-router-dom'
import './Nabvar/Nabvar.css'


const Navbar = () => {

    return (
      <nav>
        <div>
          <Link to='./'>CompraHard</Link>
        </div>
        
        <div>
          <Link to='/category/CPU'>Procesadores</Link>
          <Link to='/category/GPU'>Placas de Video</Link>
          <Link to='/category/Motherboard'>Motherboard</Link>
        </div>
      </nav>
    )
  }

  export default Navbar

  