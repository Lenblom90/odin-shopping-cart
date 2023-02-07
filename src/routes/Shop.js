import ShopBar from "../components/ShopBar";
import ShopLayout from '../components/ShopLayout';
import '../styles/Shop.css';

export default function Shop() {

    return (
        <div className="shop">
            <h1 className="shop-title">Welcome to the Shop</h1>            
            <ShopBar totalItems={0}/>
            <ShopLayout />
        </div>
    );
}