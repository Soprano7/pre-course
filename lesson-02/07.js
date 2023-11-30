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
        user: {
            ...passportMarried.address.user
        }
    }
};

console.log(petrMarried)









