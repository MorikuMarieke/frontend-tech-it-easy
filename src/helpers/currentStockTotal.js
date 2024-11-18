import buyAmount from "./buyAmount.js";
import sellAmount from "./sellAmount.js";

function currentStockTotal(tvArray) {

    const currentStock = buyAmount(tvArray) - sellAmount(tvArray);
    // console.log(currentStock);
    return currentStock;
}

export default currentStockTotal;