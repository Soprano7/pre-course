const passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk",
       
    }
};


const petrMarried = {
    ...passportMarried,
    married: true,
    address: {
        ...passportMarried.address,
    }
};

console.log(passportMarried)
console.log(petrMarried)









