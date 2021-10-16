const Tiendas = require('../models/Tienda');

//Agregar Orden
exports.add = async (req, res, next) =>{
    try {
        const tienda = new Tiendas(req.body);
        await tienda.save();

        res.json(tienda);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion' 
        });
    }
 
};

exports.list = async (req, res, next) => {
    try {
       const tienda = await Tiendas.find({})
       .populate({
        path: 'arrAnimalitosDisponibles.idAnimalito',
        model: 'Animalito'
    });
       res.json(tienda);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion' 
        });
    }
}

//Actualizar compra
exports.update = async (req, res, next) =>{
    try{
const tiendas = await Tiendas.findOneAndUpdate(
{_id: req.params.id},
req.body,
{new: true }
);
res.json({message:'Información insertada correctamente’'});
}catch (error){
    
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }

}