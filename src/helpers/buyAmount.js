import {bestSellingTv} from "../constants/inventory.js";

function buyAmount(tvArray) {
    let counter = 0;
    for (let i = 0; i < tvArray.length; i++) {
        counter += tvArray[i].originalStock;
    }
    // console.log(counter);
    counter += bestSellingTv.originalStock;
    return counter;
}

export default buyAmount;