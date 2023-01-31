const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        companyName: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
}

const createPair = () => {
    //is this to create a random pair? or is this to create a pair from existing data? 
}

// app.get("/api-tester", (req, res) => {
//     res.json(createProduct())
// })

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );


