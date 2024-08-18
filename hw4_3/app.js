function capitalizeString (str) {
    let lowerCaseStr = str.toLowerCase();
    let capitalizedStr = lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
    return capitalizedStr
}

console.log(capitalizeString("ЕВГЕНИЙ"));
console.log(capitalizeString("иВАНОВ"));