function tvScreenSizeString(tv) {
    let sizeString = '';
    for (let i = 0; i < tv.availableSizes.length; i++) {
        sizeString = sizeString + tv.availableSizes[i] + ' inch (' + (tv.availableSizes[i]*2.54).toFixed(0) + ' cm) | '
    }
    sizeString = sizeString.slice(0, -3);
    return sizeString;
}

export default tvScreenSizeString;