let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let petrMarried = JSON.parse(JSON.stringify(passportMarried))

newPassport['surname']['married'] = true;
console.log(petrMarried)







