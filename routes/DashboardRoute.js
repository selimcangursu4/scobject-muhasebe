const express = require('express');
const DashboardRoutes = express.Router();


DashboardRoutes.get('/dashboard',(req,res)=>{
    res.render('dashboard');
});

module.exports = DashboardRoutes;