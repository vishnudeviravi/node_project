exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{pageTitle: 'Add product',path:'/admin/add-product'})
}

const products =[];
exports.addProduct =(req,res,next)=>{
    products.push ({title:req.body.title})
    res.redirect("/")
}

exports.getProducts =(req,res,next)=>{
    res.render('shop',{pageTitle:'Shop',prods:products,path:'/'});
}