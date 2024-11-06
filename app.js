const express = require('express');
const app     = express();
const ejs     = require('ejs');
const path    = require('path');
const DashboardRoutes = require('./routes/DashboardRoute');
const ProductRoutes   = require('./routes/ProductRoute');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Kontrol Paneli İndex
app.get('/dashboard',DashboardRoutes);
// Stok Yönetimi -> Ürün Yönetimi
app.get('/products-view',ProductRoutes);
app.get('/products-create',ProductRoutes);


app.listen('2643',(err)=>{
    if(err)
    {
        console.log("Sunucu Başlatılamadı " + err);
    }
    console.log('Sunucu Başarıyla Başlatıldı');
})