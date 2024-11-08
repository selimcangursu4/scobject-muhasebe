const express = require('express');
const ProductRoutes = express.Router();
const ProductsController = require('../controllers/ProductsController');

ProductRoutes.get('/products-view', (req, res) => {

	try {
		res.render('../views/stock/index.ejs');
	} catch (error) {
		console.log(error);
		res.render('error.ejs', {
			errorMessage: error.message
		});
	}
});

ProductRoutes.get('/products-create', (req, res) => {

	try {
		res.render('../views/stock/create.ejs');
	} catch (error) {
		console.log(error);
		res.render('error.ejs', {
			errorMessage: error.message
		});
	}
});

ProductRoutes.post('/products-store', async (req, res) => {

	try {
		const data = req.body;
		const productResult = await ProductsController.store(data);

		if (productResult.success) {
			res.json({
				success: true,
				message: productResult.message
			});
		} else {
			res.json({
				success: false,
				message: productResult.message
			});
		}
	} catch (error) {
		console.log(error);
		res.render('error.ejs', {
			errorMessage: error.message
		});
	}

})
module.exports = ProductRoutes;