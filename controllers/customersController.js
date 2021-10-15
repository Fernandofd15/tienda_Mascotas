const Customers = require('../models/Customers');

//Agregar cliente
exports.add = async (req, res)=> {
    const customer = new Customers(req.body);
    try{
        await customer.save();
        res.json({ message:'Nuevo cliente agregado'});

    }catch (error){
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un cliente con el email: ${req.body.email}`,
            });
        }else{
            res.status(400).json({
                mesagge: 'Error al procesar la peticion'
            });
        }
    }
};


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

// leer cliente por id
exports.show = async(req, res, next) =>{
    try{
const customer = await Customers.findById(req.params.id);
if (!customer){
    res.status(404).json({ message: 'El cliente no existe'});
}
res.json(customer);
    }catch(error){
res.status(400).json({message: 'Error al procesar la peticion'});
    }
}

//Actualizar cliente
exports.update = async (req, res, next) =>{
    try{
const customer = await Customers.findOneAndUpdate(
{_id: req.params.id},
req.body,
{new: true }
);
res.json({message:'Cliente actualizado correctamente'});
}catch (error){
    if (error.code === 11000) {
        res.status(400).json({
            message: `Ya existe un cliente con el email: ${req.body.email}`,
        });
    }else{
        res.status(400).json({
            mesagge: 'Error al procesar la peticion'
        });
    }
}

}

//eliminar cliente
exports.delete = async (req, res, next) =>{
    try {
        await Customers.findByIdAndDelete({ _id: req.params.id });
        res.json({mesagge: 'El cliente ha sido eliminado'})
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
}