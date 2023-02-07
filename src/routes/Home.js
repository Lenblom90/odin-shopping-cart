import cart from '../images/shopping-cart.jpeg'
import '../styles/Home.css';

export default function Home() {

    return (
        <div className='home'>
            <h1 className='home-title'>Welcome to our webshop</h1>
            <img className='home-img' src={cart} alt='shopping cart'></img>
            <p className='home-text'>Follow the link to start shopping</p>            
        </div>
    );
}