const db = require('../config/database');

// Ürün Ekleme
async function store(productData) {

	const product_code = productData.product_code;
	const product_name = productData.product_name;
	const barcode_no = productData.barcode_no;
	const product_category_id = productData.product_category_id;
	const product_subcategory_id = productData.product_subcategory_id;
	const product_brand_id = productData.product_brand_id;
	const product_unit_id = productData.product_unit_id;
	const kdv = productData.kdv;
	const sales_price = productData.sales_price;
	const purchase_price = productData.purchase_price;
	const min_stock_level = productData.min_stock_level;
	const max_stock_level = productData.max_stock_level;
	const image_url = productData.image_url;
	const expiration_date = productData.expiration_date;
	const product_status_id = 1;
	const product_description = productData.product_description;

	try {
		const [saveResult] = await db.query("INSERT INTO products (product_code, name, barcode_code, category_id, subcategory_id, brand_id, unit_id, kdv, sales_price, purchase_price, min_stock_level, max_stock_level, image_path, expiration_date, status_id, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
			[product_code, product_name, barcode_no, product_category_id, product_subcategory_id, product_brand_id, product_unit_id, kdv, sales_price, purchase_price, min_stock_level, max_stock_level, image_url, expiration_date, product_status_id, product_description]);

		if (saveResult) {
			return {
				success: true,
				message: "Ürün Başarıyla Yüklendi"
			};
		} else {
			return {
				success: false,
				message: "Ürün Yüklenemedi"
			};
		}

	} catch (error) {
		console.log(error);
		return {
			success: false,
			message: `Bilinmeyen Controller Hatası : ${error}`
		};
	}

}

module.exports = {
	store
};