const express =require('express');

const router =express.Router();

const productController =require('../controllers/product_controller');


router.post('/products/create' ,productController.create);

router.get('/products',productController.productList);

router.delete('/products/:id',productController.delete);

router.post('/products/:id/update-quantity',productController.update);


module.exports=router;

