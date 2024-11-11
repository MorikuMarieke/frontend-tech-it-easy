import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import sellAmount from "./helpers/sellAmount.js";
import buyAmount from "./helpers/buyAmount.js";
import currentStockTotal from "./helpers/currentStockTotal.js";
import productStringGenerator from "./helpers/productStringGenerator.js";
import priceString from "./helpers/priceString.js";
import tvScreenSizeString from "./helpers/tvScreenSizeString.js";
import optionsCheckOrMinus from "./helpers/optionsCheckOrMinus.js";
import checkIcon from './assets/check.png';
import notIcon from './assets/minus.png';

function App() {

    function handleClick(buttonText) {
        console.log(buttonText)
    }

    return (
        <div>
            <header className="outer-container">
                <div className="inner-container">
                    <h1>Tech it easy dashboard</h1>
                </div>
            </header>

            <main className="outer-container">
                <article className="inner-container">
                    <section className="stock-overview-container">
                        <h2>Verkoopoverzicht</h2>
                        <div className="stock-overview">
                            <div className="info-block sell-amount">
                                <h3>Aantal verkochte producten</h3>
                                <p>{sellAmount(inventory)}</p>
                            </div>
                            <div className="info-block buy-amount">
                                <h3>Aantal ingekochte producten</h3>
                                <p>{buyAmount(inventory)}</p>
                            </div>
                            <div className="info-block stock-amount">
                                <h3>Aantal te verkopen producten</h3>
                                <p>{currentStockTotal(inventory)}</p>
                            </div>
                        </div>
                    </section>

                    <h2>Best verkochte TV</h2>

                    <section className="product-block best-product">
                        <div className="image-wrapper">
                            <img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="bestselling tv"/>
                        </div>
                        <div>
                            <h3>{productStringGenerator(bestSellingTv)}</h3>
                            <h2>{priceString(bestSellingTv)}</h2>
                            <p>{tvScreenSizeString(bestSellingTv)}</p>
                            <p>
                                <img className="options-icon" src={checkIcon} alt="yes"/> wifi <img className="options-icon" src={notIcon} alt="no"/> speech <img className="options-icon" src={checkIcon} alt="yes"/> hdr <img className="options-icon" src={checkIcon} alt="yes"/> bluetooth <img className="options-icon" src={notIcon} alt="no"/> ambilight
                            </p>
                            <p>{optionsCheckOrMinus(bestSellingTv)}</p> {/*Ik heb een helper functie gemaakt voor het ophalen van alle opties*/}
                        </div>
                    </section>

                    <h2>Alle TV's</h2>

                    <div className="button-block">
                        <button
                            className="filter-button"
                            type="button"
                            onClick={() => handleClick('Meest verkocht eerst')}>
                            Meest verkocht eerst
                        </button>
                        <button
                            className="filter-button"
                            type="button"
                            onClick={() => handleClick('Goedkoopste eerst')}>
                            Goedkoopste eerst
                        </button>
                        <button
                            className="filter-button"
                            type="button"
                            onClick={() => handleClick('Meest geschikt voor sport eerst')}>
                            Meest geschikt voor sport eerst
                        </button>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default App
