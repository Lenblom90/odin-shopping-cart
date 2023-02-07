import '../styles/ShopBar.css';

export default function ShopBar({totalItems}){
    return(
        <div className="shop-bar">
            <div>{"Items in cart: " + totalItems}</div>
            <button>Checkout</button>
        </div>
    )
}