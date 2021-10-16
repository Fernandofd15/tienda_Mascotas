const multer = require('multer');
const multerConfig = require('../utils/multerConfig');
const Animalitos = require('../models/Animalito');

const upload = multer(multerConfig).single('image');

exports.fileUpload = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mesagge: error });
        }
        return next();
    });
};

//Agregar animalito
exports.add = async (req, res) => {
    const animalito = new Animalitos(req.body);
    try {
        if (req.file && req.file.filename) {
            animalito.image = req.file.filename;
        }
        await animalito.save();
        res.json({ message: 'Información insertada correctamente’' });

    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion'
        });
    }
};


//primera accion: list
exports.list = async (req, res) => {
    try {
        const animalito = await Animalitos.find({});
        res.json(animalito);
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
        next();
    }
};

// leer producto por id
exports.show = async (req, res, next) => {
    try {
        const animalito = await Animalitos.findById(req.params.id);
        if (!animalito) {
            res.status(404).json({ message: 'El producto no existe' });
        }
        res.json(animalito);
    } catch (error) {
        res.status(400).json({ message: 'Error al procesar la peticion' });
    }
};

//Actualizar producto
exports.update = async (req, res, next) => {
    try {
        let newAnimalito = req.body;
        if (req.file && req.file.filename) {
            newAnimalito.image = req.file.filename;
        } else {
            const animalito = await Animalitos.findById(req.params.id);
            newAnimalito.image = animalito.image;
        }
        const animalitotUpdated = await Animalitos.findOneAndUpdate(
            { _id: req.params.id },
            newAnimalito,
            { new: true }
        );
        res.json({ message: 'Información insertada correctamente' });
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la peticion'
        });

    }

};

//eliminar producto
exports.delete = async (req, res, next) => {
    try {
        await Animalitos.findByIdAndDelete({ _id: req.params.id });
        res.json({ mesagge: 'El animalito ha sido eliminado' })
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
}