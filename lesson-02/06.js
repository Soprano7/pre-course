let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


let newPassportNew = JSON.parse(JSON.stringify(passportWithAddress));


newPassportNew.address.city = "Bobryisk";


console.log(passportWithAddress.address.city); 
console.log(newPassportNew.address.city); 