import {inventory} from "./inventory.js";



//1a. Array-method with all tv types
const tvTypeArrayMethod = inventory.map((tv) => {
    return tv.type;
});
console.log('TV type Array');
console.log(tvTypeArrayMethod);

// //1a. Function for return all tv types
// function tvTypeArray(tvArray) {
//     return tvArray.map((tv) => tv.type);
// }
// export default tvTypeArray;
// tvTypeArray(inventory);



//1b. Array-method with all objects of TVs that are sold out.
const soldOutTvArrayMethod = inventory.filter((tv) => {
    if (tv.originalStock - tv.sold === 0) {
        return tv;
    }
});
console.log('Sold out Array');
console.log(soldOutTvArrayMethod);

//1c. Array-method to find info on NH3216SMART-type
const findType = inventory.find((item) => {
    return item.type === 'NH3216SMART';
});
console.log('tvTypeFinder');
console.log(findType);

// 1d List of brands suitable for sports (>= 100Hz refreshRate) name: 'name', suitable: true/false
// 1d firstTry - I created a new inventory with added info suitableForSports followed up by an array that displays brand+name + suitableForSports boolean
const inventoryWithSportSuitability = inventory.map(item => {
    if (item.refreshRate >= 100) {
        return { ...item, suitableForSport: true}
    }
    else {
        return { ...item, suitableForSport: false}
    }
});
console.log(inventoryWithSportSuitability);

const sportsSuitabilityArray = inventoryWithSportSuitability.map(item => ({
    name: item.brand + ' ' + item.name,
    suitable: item.suitableForSport
}));
console.log(sportsSuitabilityArray);

// 1d-secondTry - I created a list with only the brand+name + suitableForSports boolean.
const listSportSuitability = inventory.map(item => {
    if (item.refreshRate >= 100) {
        return { name: `${item.brand} ${item.name}`, suitableForSports: true }
    }
    else {
        return { name: `${item.brand} ${item.name}`, suitableForSports: false }
    }
});
console.log(listSportSuitability);

//1e. Array-method to collect all info  of tv's with size >= 65inch

const threshold = 65;
const size65IncAndUp = inventory.filter((item) => {
    if (item.availableSizes.some(size => size >= threshold)) {
        return true;
    }
    else {
        return false;
    }
});

console.log('array of all tvs that have 65inch or higher');
console.log(size65IncAndUp);

//1f. Array method to collect all info of tv's that have ambilight

const hasAmbilight = inventory.filter((item) => {
    return item.options.find((option) => {
        if (option.name === "ambiLight" && option.applicable === true) {
            return true;
        }
    });
});
console.log('deze heeft ambilight')
console.log(hasAmbilight);



