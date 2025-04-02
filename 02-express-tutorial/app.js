const express = require('express');
const {products} =  require('./data');

const app = express();

app.use(express.static("./public")); // Middleware to parse JSON bodies

app.get('/api/v1/test', (req, res) => {
   res.json({message: "It worked!"});
})

app.get('/api/v1/products', (req, res) => {
    res.json({products});
 })

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); // req.params will give us the route parameters
    const product = products.find((product) => product.id === idToFind); // Find the product by ID
    if (!product) {
        return res.status(404).json({message: `That product was not found.`}); // If product not found, send 404
    }
    res.json({product}); // Send the product as a response
})

app.get('/api/v1/query', (req, res) => {
    const {search, limit, price} = req.query; // req.params will give us the route parameters
    let sortedProducts = [...products]; // Create a copy of the products array
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (price) {
        const [operator, value] = price.split(':'); // Assuming price is passed as 'lt_50' or 'gt_20'
        const priceValue = parseFloat(value);

        if (operator === 'lt') {
            sortedProducts = sortedProducts.filter((product) => product.price < priceValue);
        } else if (operator === 'lte') {
            sortedProducts = sortedProducts.filter((product) => product.price <= priceValue);
        } else if (operator === 'gt') {
            sortedProducts = sortedProducts.filter((product) => product.price > priceValue);
        } else if (operator === 'gte') {
            sortedProducts = sortedProducts.filter((product) => product.price >= priceValue);
        } else if (operator === 'eq') {
            sortedProducts = sortedProducts.filter((product) => product.price === priceValue);
        }
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, parseInt(limit)); // Limit the number of products based on the query parameter
    }

    res.status(200).json({sortedProducts}); // Send the product as a response
})

app.post('/', (req, res) => {
    
})

app.all('*', (req, res) => {
    res.status(404).send('Route does not exist');
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})

