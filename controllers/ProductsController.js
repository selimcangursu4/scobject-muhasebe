const db = require('../config/database');

// Ürün Ekleme
async function store(productData) {

    valida
    
    const product_code           = productData.product_code;
    const product_name           = productData.product_name;
    const barcode_no             = productData.barcode_no;
    const product_category_id    = productData.product_category_id;
    const product_subcategory_id = productData.product_subcategory_id
    const product_brand_id       = productData.product_brand_id;
    const product_unit_id        = productData.product_unit_id;
    const kdv                    = productData.kdv;
    const sales_price            = productData.sales_price;
    const purchase_price         = productData.purchase_price;
    const min_stock_level        = productData.min_stock_level;
    const max_stock_level        = productData.max_stock_level;
    const image_url              = productData.expiration_date;
    const product_status_id      = productData.product_status_id;
    const product_description    = productData.product_description;

}

module.exports =
 {
    store
};