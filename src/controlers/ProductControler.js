const mongoose = require('mongoose');

const Product = mongoose.model('product');

module.exports = {
    
    //Listando os produtos do banco
    async index(req, res){
        const products = await Product.find();
        
        return res.json(products);
    },

    //Exibindo produto
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //criando produtos no banco
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //atualizando produto no banco
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, 
        {new: true});

        return res.json(product);
    },

    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();

    }
   
};