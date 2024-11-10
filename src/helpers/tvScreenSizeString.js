function tvScreenSizeString(tvArray) {
    let sizeString = '';
    for (let i = 0; i < tvArray[1].length; i++) {
        sizeString = sizeString + tvArray[1].size[i] + '|'
    }
    console.log(sizeString)
    return sizeString
}

export default tvScreenSizeString;