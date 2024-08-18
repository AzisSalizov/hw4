function hidePhoneNumber(phoneNumber) {
    let formattedPhoneNumber = "+";

    for (const formattedPhoneNumberElement of phoneNumber) {
        if (formattedPhoneNumberElement >= "0" && formattedPhoneNumberElement <= "9") {
            formattedPhoneNumber += formattedPhoneNumberElement;
        }

    }

    let hidenPhoneNumber = formattedPhoneNumber.slice(0, -2) + "xx";

    let formattedResult =
        hidenPhoneNumber.slice(0, 4) + " " +
        hidenPhoneNumber.slice(4, 7) + " " +
        hidenPhoneNumber.slice(7, 10) + " " +
        hidenPhoneNumber.slice(10);

    return formattedResult;
}

console.log(hidePhoneNumber("+996 555 458 000"));
console.log(hidePhoneNumber("+996 552 231 459"));