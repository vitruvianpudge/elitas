const express = require("express");
const router = express.Router();
const { getPlanes, createPlane } = require('../controllers/planes')
const path = require('path');
const multer = require('multer')

// when keep image
const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file, filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage });

router.get('/', getPlanes);
router.get('/:id', (req, res) => res.send('Get one plane'));
router.post('/', upload.single('planeImage'), createPlane);


module.exports = router;