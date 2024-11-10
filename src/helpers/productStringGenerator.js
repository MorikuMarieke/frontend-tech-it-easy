function productStringGenerator(tvArray) {
    const productString = tvArray[1].brand + ' ' + tvArray[1].type + ' - ' + tvArray[1].name;
    return productString
}

export default productStringGenerator;