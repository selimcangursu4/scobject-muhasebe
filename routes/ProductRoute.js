const express = require('express');
const ProductRoutes = express.Router();


ProductRoutes.get('/products-view',(req,res)=>{

    res.render('../views/stock/index.ejs');
});

ProductRoutes.get('/products-create',(req,res)=>{

    res.render('../views/stock/create.ejs');
});

module.exports = ProductRoutes;