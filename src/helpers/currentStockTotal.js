import buyAmount from "./buyAmount.js";
import {inventory} from "../constants/inventory.js";
import sellAmount from "./sellAmount.js";

function currentStockTotal(tvArray) {

    const currentStock = buyAmount(inventory) - sellAmount(inventory);
    console.log(currentStock);
    return currentStock;
}

export default currentStockTotal;