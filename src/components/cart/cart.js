import './cart.css'
import { useState } from 'react'
const Cart =({name, price, id, img}) => {

    const Cart = { id, name, price } = useState ()
    
    return (

        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            
        </article>
    )
}

export default Cart