import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
import pizzasData from './data.js';

function App() {
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
}

const Header = () => {
    return <header className="header footer">
        <h1>Fast React Pizza Co.</h1>
    </header>
}

function Menu() {
    let noPizzas = pizzasData.length;
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {noPizzas ?
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All
                        from our stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzasData.map((pizzaData) => (<Pizza pizzaData={pizzaData}/>))}
                    </ul>
                </>
                : <p>We're still working on our menu. Please come back later :)</p>
            }
        </main>)
}

function Pizza({pizzaData}) {
    return (
        <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`} key={pizzaData.name}>
            <img alt={pizzaData.name} src={`${process.env.PUBLIC_URL}/pizzas/${pizzaData.photoName}`}></img>
            <div>
                <h3>{pizzaData.name}</h3>
                <p>{pizzaData.ingredients}</p>
                <span>{pizzaData.soldOut ? "SOLD OUT" : pizzaData.price}</span>
            </div>
        </li>)
}

const Footer = () => {
    let openHours =9;
    let closeHours = 22;
    let currentHour = new Date().getHours();
    let openStatus = openHours <= currentHour && currentHour < closeHours ? true : false;
    return <footer className="footer">
        {
            openStatus
                ? <Order hour = {currentHour}/>
                :
                <p>
                    We're happy to welcome you between {openHours}:00 and {closeHours}:00.
                </p>
        }
    </footer>
}

const Order = ({hour}) => {
    return (
        <div className='order'>
            It's {hour}:00, we are currently open.
            <button className='btn' >Order</button>
        </div>
    )

}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);