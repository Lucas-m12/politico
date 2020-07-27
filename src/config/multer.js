const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {  
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },

        // Irá alterar o nome do arquivo para que não haja sobreposição
        filename: (req, file, cb) => {
            crypto.randomBytes(8, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            });
        },
    }),

    // Irá impor limites como tamanho, quantidade de arquivos...
    limts: {},

    // Define os tipos de arquivos que serão aceitos.
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'application/pdf'
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Tipo de arquivo inválido.'));
        }
    },
};