const Usuarios = require('../models/Usuario');

//Agregar cliente
exports.add = async (req, res)=> {
    const usuario = new Usuarios(req.body);
    try{
        await usuario.save();
        res.json({ message:'Información insertada correctamente'});

    }catch (error){
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un cliente con el correo: ${req.body.strCorreo}`,
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
    const usuario = await Usuarios.find({});
    res.json(usuario);
}catch(error){
    console.log(error);
    res.send(error);
    next();
}
};

// leer cliente por id
exports.show = async(req, res, next) =>{
    try{
const usuario = await Usuarios.findById(req.params.id);
if (!usuario){
    res.status(404).json({ message: 'El usuario no existe'});
}
res.json(usuario);
    }catch(error){
res.status(400).json({message: 'Error al procesar la peticion'});
    }
}

//Actualizar cliente
exports.update = async (req, res, next) =>{
    try{
const usuario = await Usuarios.findOneAndUpdate(
{_id: req.params.id},
req.body,
{new: true }
);
res.json({message:'Información insertada correctamente’'});
}catch (error){
    if (error.code === 11000) {
        res.status(400).json({
            message: `Ya existe un cliente con el correo: ${req.body.strCorreo}`,
        });
    }else{
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
}

}

//eliminar cliente
exports.delete = async (req, res, next) =>{
    try {
        await Usuarios.findByIdAndDelete({ _id: req.params.id });
        res.json({mesagge: 'El usuario ha sido eliminado'})
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
}