function sellAmount(tvArray) {
    let counter = 0;
    for (let i = 0; i < tvArray.length; i++) {
        counter = counter + tvArray[i].sold;
    }
    console.log(counter);
    return counter;
}

export default sellAmount;