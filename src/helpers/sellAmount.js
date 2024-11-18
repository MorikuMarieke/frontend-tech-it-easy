import {bestSellingTv} from "../constants/inventory.js";

function sellAmount(tvArray) {
    let counter = 0;
    for (let i = 0; i < tvArray.length; i++) {
        counter += tvArray[i].sold;
    }
    // console.log(counter);
    counter += bestSellingTv.sold;
    return counter;
}

export default sellAmount;