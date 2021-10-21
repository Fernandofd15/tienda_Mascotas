const Tiendas = require('../models/Tienda');
const Usuarios = require('../models/Usuario');
const Animalitos = require('../models/Animalito');

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
        path: 'aJsnCompra', 
        populate: {
            path:'idUsuario',
            model:'Usuario'
        }
    })
    .populate({
        path: 'aJsnCompra', 
        populate: {
            path:'idAnimalito',
            model:'Animalito'
        }
    })

    .populate({
        path: 'aJsnCompra', 
        populate: {
            path:'arrMascotas',
            populate: {
                path:'idAnimalito',
                model:'Animalito'
            }
        }
    })

       .populate({
        path: 'arrAnimalitosDisponibles.idAnimalito',
        model: 'Animalito',
        
    });
       res.json(tienda);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion' 
        });
    }
}

//Actualizar tienda
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

// mostrar cliente por id
exports.show = async(req, res, next) =>{
    try{
const tienda = await Tiendas.findById(req.params.id)
.populate({
    path: 'aJsnCompra', 
    populate: {
        path:'idUsuario',
        model:'Usuario'
    }
})
.populate({
    path: 'aJsnCompra', 
    populate: {
        path:'idAnimalito',
        model:'Animalito'
    }
})

.populate({
    path: 'aJsnCompra', 
    populate: {
        path:'arrMascotas',
        populate: {
            path:'idAnimalito',
            model:'Animalito'
        }
    }
})

   .populate({
    path: 'arrAnimalitosDisponibles.idAnimalito',
    model: 'Animalito',
    
});
if (!tienda){
    res.status(404).json({ message: 'La tienda no existe'});
    next();
}
res.json(tienda);
    }catch(error){
res.status(400).json({message: 'Error al procesar la peticion'});
    }
};


//eliminar producto
exports.delete = async (req, res, next) => {
    try {
        await Tiendas.findByIdAndDelete({ _id: req.params.id });
        res.json({ mesagge: 'La tienda ha sido eliminada' })
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
}