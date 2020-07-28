const multer = require('multer');
const multerConfig = require('../../config/multer');

const multerMiddleware = multer(multerConfig).single('file');

module.exports = { config: multerMiddleware };
