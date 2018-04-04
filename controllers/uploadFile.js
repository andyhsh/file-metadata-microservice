const express = require('express');
const multer = require('multer');
const upload = multer({ dest: '/uploads' });
const router = express.Router();

router.post('/get-file-size', upload.single('file'), (req, res) => {
  if (typeof req.file !== 'undefined') {
    let { size } = req.file;

    // converts bytes to megabytes and kilobytes for larger file sizes
    size =
      size >= 1000000
        ? (size / 1000000).toFixed(2) + ' MB'
        : size >= 1000 ? (size / 1000).toFixed(2) + ' kB' : size + ' bytes';
    res.json({ 'file size': size });
  } else {
    res.json({ error: 'Please upload a file before submitting.' });
  }
});

module.exports = router;
