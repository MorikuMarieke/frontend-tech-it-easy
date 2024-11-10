import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import sellAmount from "./helpers/sellAmount.js";
import buyAmount from "./helpers/buyAmount.js";
import currentStockTotal from "./helpers/currentStockTotal.js";
import productStringGenerator from "./helpers/productStringGenerator.js";
import priceString from "./helpers/priceString.js";
import tvScreenSizeString from "./helpers/tvScreenSizeString.js";

function App() {
  return (
      <div>
          <h1>Begin hier met met maken van de applicatie!</h1>
          <p>Marieke</p>
          <p>{bestSellingTv.type}</p>
          <p className="sellAmountProducts">Aantal verkochte producten: {sellAmount(inventory)}</p>
          <p className="buyAmountProducts">Aantal ingekochte producten: {buyAmount(inventory)}</p>
          <p className="currentStockTotal">Aantal ingekochte producten: {currentStockTotal(inventory)}</p>
          <p>{productStringGenerator(inventory)}</p>
          <p>{priceString(145)}</p>
          <p>{tvScreenSizeString(inventory)}</p>
      </div>
  )
}

export default App
