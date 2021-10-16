const Compras = require('../models/Compra');

//Agregar Orden
exports.add = async (req, res, next) =>{
    try {
        const compra = new Compras(req.body);
        await compra.save();

        res.json(compra);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion' 
        });
    }
 
};

exports.list = async (req, res, next) => {
    try {
       const compras = await Compras.find({})
       .populate('idUsuario')
       .populate('idAnimalito')
       

       res.json(compras);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion' 
        });
    }
}

//Actualizar compra
exports.update = async (req, res, next) =>{
    try{
const compras = await Compras.findOneAndUpdate(
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
