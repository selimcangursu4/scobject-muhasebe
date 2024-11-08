const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const DashboardRoutes = require('./routes/DashboardRoute');
const ProductRoutes = require('./routes/ProductRoute');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Dashboard Index
app.get('/dashboard', DashboardRoutes);

// Stock Management -> Product Management
app.get('/products-view', ProductRoutes);
app.get('/products-create', ProductRoutes);
app.post('/products-store', ProductRoutes);

// Error 404 Page
app.get('/error/404', (req, res) => {
	res.render('error.ejs');
})

app.listen('2643', (err) => {
	if (err) {
		console.log("Sunucu Başlatılamadı " + err);
	}
	console.log('Sunucu Başarıyla Başlatıldı');
})