const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Post a new product
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET a specific product
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
});

// PATCH (Update) a product
router.patch('/:id', getProduct, async (req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name;
    }
    if (req.body.category != null) {
        res.product.category = req.body.category;
    }
    if (req.body.price != null) {
        res.product.price = req.body.price;
    }
    if (req.body.stock != null) {
        res.product.stock = req.body.stock;
    }
    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a product
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get product by ID
async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.product = product;
    next();
}

module.exports = router;