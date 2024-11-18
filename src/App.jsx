import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import sellAmount from "./helpers/sellAmount.js";
import buyAmount from "./helpers/buyAmount.js";
import currentStockTotal from "./helpers/currentStockTotal.js";
import productStringGenerator from "./helpers/productStringGenerator.js";
import priceString from "./helpers/priceString.js";
import tvScreenSizeString from "./helpers/tvScreenSizeString.js";
import checkIcon from './assets/check.png';
import notIcon from './assets/minus.png';
import './constants/arrayMethods.js';
import outOfStockImg from './assets/out-of-stock.png';

function App() {

// Part 1 assignment 2f
    // function handleClick(buttonText) {
    //     console.log(buttonText)
    // }

// Part 2 Assignment 3a
    function mostPopularFirst(tvArray) {
        const mostPopularSortedArray = tvArray.sort((a, b) => b.sold - a.sold);
        console.log(mostPopularSortedArray);
        // return mostPopularSortedArray;
    }
// Part 2 Assignment 3b
    function cheapestFirst(tvArray) {
        const cheapestSortedArray = tvArray.sort((a, b) => a.price - b.price);
        console.log(cheapestSortedArray);
        // return cheapestSortedArray;
    }

// Part 2 Assignment 3c
    function sportsCompatibility(tvArray) {
        const sportsCompatibilityArray = tvArray.sort((a, b) => b.refreshRate - a.refreshRate);
        console.log(sportsCompatibilityArray);
        // return sportsCompatibilityArray;
    }

// Part 2 Bonus Assignment 1
    function largestScreenSize(tvArray) {
        const largestScreenSizeArray = tvArray.sort ((a, b) => {
            return b.availableSizes[b.availableSizes.length - 1] - a.availableSizes[a.availableSizes.length - 1];
        });
        console.log(largestScreenSizeArray);
        // return largestScreenSizeArray
    }

    return (
        <>
            <header className="outer-container">
                <div className="inner-container">
                    <h1>Tech it easy dashboard</h1>
                </div>
            </header>

            <main className="outer-container">
                <div className="inner-container">
                    <section className="dashboard-container">
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
                        <div>
                            <h2>Lijst van merken</h2>
                            <ul>
                                {/*Assignment 2a Array method to display list of brands on page*/}
                                {inventory.filter((tv, index, self) => self.findIndex(t => t.brand === tv.brand) === index).map((tv) => {
                                    return <li key={`${tv.brand}-${tv.type}`}>{tv.brand}</li>
                                })}
                            </ul>
                        </div>
                    </section>

                    <section className="best-product-container">
                        <h2>Best verkochte TV</h2>
                        <article className="product best-product">
                            <figure className="image-wrapper">
                                <img className="product-image" src={bestSellingTv.sourceImg} alt="bestselling tv"/>
                                {bestSellingTv.originalStock - bestSellingTv.sold === 0 && (
                                    <img className="overlay-image"
                                         src= {outOfStockImg}
                                         alt="OutOfStock"
                                    />
                                )}
                            </figure>
                            <div>
                                <h3>{productStringGenerator(bestSellingTv)}</h3>
                                <h2>{priceString(bestSellingTv)}</h2>
                                <p>{tvScreenSizeString(bestSellingTv)}</p>
                                <ul className="options-list">
                                    {bestSellingTv.options.map((option) => {
                                        if (option.applicable === true) {
                                            return <li key={`${bestSellingTv.type}-${option.name}`}><img
                                                className="options-icon" src={checkIcon}
                                                alt="Aanwezig"/>{option.name}</li>
                                        } else {
                                            return <li key={`${bestSellingTv.type}-${option.name}`}><img
                                                className="options-icon" src={notIcon}
                                                alt="Afwezig"/>{option.name}</li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </article>
                    </section>

                    <section className="all-tvs-container">
                        <h2>Alle TV's</h2>

                        <div className="button-block">
                            <button
                                className="filter-button"
                                type="button"
                                onClick={() => mostPopularFirst(inventory)}>
                                Meest verkocht eerst
                            </button>

                            <button
                                className="filter-button"
                                type="button"
                                onClick={() => cheapestFirst(inventory)}>
                                Goedkoopste eerst
                            </button>

                            <button
                                className="filter-button"
                                type="button"
                                onClick={() => sportsCompatibility(inventory)}>
                                Meest geschikt voor sport eerst
                            </button>

                            <button
                                className="filter-button"
                                type="button"
                                onClick={() => largestScreenSize(inventory)}>
                                Grootste schermgrootte eerst
                            </button>
                        </div>
                        {inventory.map((tv) => {
                            return (
                                <article className="product" key={tv.type}>
                                    <figure className = "image-wrapper">
                                        <img className="product-image"
                                            src={tv.sourceImg}
                                            alt="Afbeelding van product"
                                        />
                                        {/*Part 2 Bonus Assignment 2*/}
                                        {tv.originalStock - tv.sold === 0 && (
                                            <img className="overlay-image"
                                                 src= {outOfStockImg}
                                                 alt="OutOfStock"
                                            />
                                        )}
                                    </figure>
                                    <div>
                                        <h3>{productStringGenerator(tv)}</h3>
                                        <h2>{priceString(tv)}</h2>
                                        <p>{tvScreenSizeString(tv)}</p>
                                        <ul className="options-list">
                                            {tv.options.map((option) => {
                                                if (option.applicable === true) {
                                                    return <li key={`{${tv.type}-${option.name}`}><img
                                                        className="options-icon" src={checkIcon}
                                                        alt="Aanwezig"/>{option.name}</li>
                                                } else {
                                                    return <li key={`{${tv.type}-${option.name}`}><img
                                                        className="options-icon" src={notIcon}
                                                        alt="Afwezig"/>{option.name}</li>
                                                }
                                            })}
                                        </ul>
                                    </div>

                                </article>
                            )
                        })}
                    </section>
                </div>
            </main>
        </>
    )
}

export default App
