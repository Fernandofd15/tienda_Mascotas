const Customers = require('../models/Customers');

//primera accion: list
exports.list = async (req, res) => {
    try{
    const customers = await Customers.find({});
    res.json(customers);
}catch(error){
    console.log(error);
    res.send(error);
    next();
}
};
