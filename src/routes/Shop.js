import { useState } from "react";
import ShopBar from "../components/ShopBar";
import ShopLayout from '../components/ShopLayout';
import '../styles/Shop.css';

export default function Shop() {
    const [cart, setCart] = useState([]);

    const handleAdd = (item) => {
        setCart([...cart, item]);
    }
    return (
        <div className="shop">
            <h1 className="shop-title">Welcome to the Shop</h1>            
            <ShopBar totalItems={cart.length}/>
            <ShopLayout addToCart={handleAdd}/>
        </div>
    );
}