import { useState } from 'react';
import '../styles/ShopItem.css';


export default function ShopItem({src, name, id}) {
    const [amount, setAmount] = useState(0);

    const handleDecrement = () => {
        if(amount > 0){
            setAmount(amount - 1);
            const target = document.getElementById('product-number' + id)
            target.value = amount - 1;    
        }
    }

    const handleIncrement = () => {
        if(amount < 100){
            setAmount(amount + 1)
            const target = document.getElementById('product-number' + id)
            target.value = amount + 1;    
        }
    }

    return(
        <div className="shop-item">
            <img className="product-image" src={src}></img>
            <p className="product-name">{name}</p>
            <div>
                <button onClick={(handleDecrement)}>-</button>
                <input className='product-input' id={'product-number' + id} defaultValue={amount} onChange={(e) => setAmount(parseInt(e.target.value))} type="number"/>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button>Add To Cart</button>
        </div>
    )
}