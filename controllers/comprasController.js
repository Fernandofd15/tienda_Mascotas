const Compras = require('../models/Compra');

//Agregar Orden
exports.add = async (req, res, next) => {
    try {
        const compra = new Compras(req.body);
        await compra.save();
        res.json({ 
            ok:true,
            message: 'Información insertada correctamente', 
            status:200,
            cont: compra
        });
    } catch (error) {
        res.json({
            ok:false,
            mesagge: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
    }

};

exports.list = async (req, res, next) => {
    try {
        const compras = await Compras.find({})
            .populate('idUsuario')
            .populate('idAnimalito')
        res.json({
            ok: true,
            mesagge: 'petición exitosa',
            status:200,
        cont: compras
        });
    } catch (error) {
        res.json({
            ok:false,
            mesagge: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
    }
}

//Actualizar compra
exports.update = async (req, res, next) => {
    try {
        const compras = await Compras.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json({
            ok: true,
            mesagge: 'Información insertada correctamente',
            status:200,
        cont: compras
        }
        );
    } catch (error) {
        res.json({
            ok:false,
            mesagge: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
        
    }

}

// mostrar cliente por id
exports.show = async (req, res, next) => {
    try {
        const compra = await Compras.findById(req.params.id)
            .populate('idAnimalito')
            .populate('idUsuario');

        if (!compra) {
            
            res.json({ 
                ok:true,
                message: 'La compra no existe',
                status:404,
                cont:[]
             });
            next();
        }
        res.json({
            ok: true,
            mesagge: 'petición exitosa',
            status:200,
            cont: compra
        });
    } catch (error) {
        res.json({
            ok:false,
            mesagge: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
    }
};



//eliminar producto
exports.delete = async (req, res) => {
    try {
        await Compras.findByIdAndDelete({ _id: req.params.id });
        res.json({ 
            ok:true,
            mesagge: 'La compra ha sido eliminada', 
            status:200,
            cont:req.params.id
        });
    } catch (error) {
        res.json({
            ok:false,
            mesagge: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
    }
};
