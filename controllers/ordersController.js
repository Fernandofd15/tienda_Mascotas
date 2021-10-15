const Orders = require('../models/Orders');

//Agregar Orden
exports.add = async (req, res, next) =>{
    try {
        const order = new Orders(req.body);
        await order.save();

        res.json(order);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion' 
        });
    }
 
};

exports.list = async (req, res, next) => {
    try {
       const orders = await Orders.find({})
       .populate('customer')
       .populate({
           path: 'products.product',
           model: 'Products'
       });

       res.json(orders);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion' 
        });
    }
}