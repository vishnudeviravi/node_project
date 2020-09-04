const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{pageTitle: 'Add product',path:'/admin/add-product'})
}


exports.addProduct =(req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/")
}

exports.getProducts =(req,res,next)=>{
    Product.fetchAll(products=>{
    res.render('shop',{pageTitle:'Shop',prods:products,path:'/'});
    })
}