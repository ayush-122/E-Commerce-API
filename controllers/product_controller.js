const Product = require('../models/product');
module.exports.create= async function(req,res)
{
    try
    {
        console.log(req.body.product);
     const product = await Product.create(req.body.product);

     return res.json({
        data:{
            product:{
                name:product.name,
                quantity:product.quantity
            },
            message:"products has been created successfully"
        }
     })
    }
    catch(error)
    {
        console.log('error in creating product',error);
        return res.json({
            error:"error in creating product"
        })
    }
}
module.exports.productList =async function(req,res)
{
   try{
    const products =await Product.find({}).select('id name quantity');
    return res.json({
        data:{
            products:products
        }
    })
   }
   catch(error)
   {
    return res.json({
        error:"error in finding product lists"
    })
   }

}

module.exports.update=async function(req,res)
{
    const quantityChange =Number(req.query.quantity);
    try
    {
  const updatedProduct=await Product.findByIdAndUpdate(req.params.id,
    {
        $inc:{
            quantity:quantityChange
        }
    },
    {new:true}
    );
    res.json({
        data:
        {
            product:updatedProduct,
            message:"updated successfully"
        }
    })
}
catch(error)
{
    res.json({
        data:{
            message:"error in updating quantity"
        }
    })
}

}

module.exports.delete=async function(req,res)
{

    try{
        const product =await Product.findById(req.params.id);
        console.log(product);
        if(product)
        {
           await Product.findByIdAndDelete(req.params.id);
           res.send({
            data:
            {
                message:"product deleted"
            }
           })
        }
        else
        {
            res.send({
                data:
                {
                    message:"products does not exists"
                }
            })
        }
        
    }
    catch(error)
    {
        return res.send({
            data:{
                message:"error in deleting product"
            }
        })
    }

}