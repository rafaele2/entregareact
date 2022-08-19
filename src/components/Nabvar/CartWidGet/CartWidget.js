import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return(
        <Link to='/cart' className="CartWidget">
            <img src="/images/cart.svg" alt='cart-widget' className='CartImg'/>
            10
        </Link>
    );
}

export default CartWidget