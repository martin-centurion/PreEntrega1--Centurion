import { useState } from 'react';
import buzoMorado from '../assets/buzo_morado.jpg';



export default function ItemCount () {

    const [contador, setCount] = useState(0);

    function agregarProductos () {
    setCount(contador + 1);
    }

    function descontarProductos () {
        setCount(contador - 1);
    }

    return (
        <div className="productos container">
            <div className="productos__content">
                <div className="productos__content-img">
                    <img src={buzoMorado} className="productos" alt="Buzo Morado"/>
                    <h2>Buzo Morado</h2>
                    <div className="productos__content-cantidad">
                    <div className="productos__content-cantidad-contador">
                        <p onClick={ descontarProductos }>-</p>
                        <h3>{ contador }</h3>
                        <p onClick={ agregarProductos }>+</p>
                    </div>
                    <button href="@" onClick={ agregarProductos }>Agregar al carrito</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
