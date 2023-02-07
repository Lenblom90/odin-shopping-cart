import ShopItem from "./ShopItem";
import src from '../images/shopping-cart.jpeg';
import '../styles/ShopLayout.css';

export default function ShopLayout() {
    const products = [
        {
            id: 1,
            name: "cart",
            src: src,
        },
        {
            id: 2,
            name: "apple",
            src: src,
        },
        {
            id: 3,
            name: "hammer",
            src: src,
        },
        {
            id: 4,
            name: "book",
            src: src,
        },
        {
            id: 5,
            name: "phone",
            src: src,
        },

    ];

    

    return(
        <div className="shop-layout">
            {products.map((product) => <ShopItem key={product.id} id={product.id} name={product.name} src={product.src}/>)}
        </div>
    )
}