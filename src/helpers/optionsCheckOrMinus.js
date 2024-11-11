function optionsCheckOrMinus(tv) {
    let optionsString = '';
    for (let i = 0; i < tv.options.length; i++) {
        if (tv.options[i].applicable === true) {
            optionsString += tv.options[i].name + ': + | '
        }
        else {
            optionsString += tv.options[i].name + ': - | '
        }
    }
    optionsString = optionsString.slice(0, -3)
    return optionsString
}

export default optionsCheckOrMinus;

//Alle options doorlopen
//Als optie 'true' is, dan add naam optie met 'check', else naam optie met 'min'.