const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};


app.get("/api-tester", (req, res) => {
        res.json(createProduct())
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );


