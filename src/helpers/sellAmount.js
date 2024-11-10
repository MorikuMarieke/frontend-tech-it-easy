function sellAmount(tvArray) {
    let counter = 0;
    for (let i = 0; i < tvArray.length; i++) {
        counter = counter + tvArray[i].sold;
        // console.log(tvArray[i].sold);
    }
    // console.log(totalAmountSold)
    // console.log(tvArray)
    return counter
}

export default sellAmount;