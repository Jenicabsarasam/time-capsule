const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dalsvcuxk',
  api_key: '738494493317998',
  api_secret: '***********************',
});

// Multer and Cloudinary storage setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'TimeCapsule',
    format: async () => 'jpeg', // supports promises as well
    public_id: (req, file) => file.filename,
  },
});

const upload = multer({ storage: storage });

// Database connection
const con = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Jeni@2004',
  database: 'register',
});

// Handle image upload
router.post('/upload', upload.single('image'), (req, res) => {
  const { userId } = req.body;
  const imageUrl = req.file.path;

  // Store the image URL in the database
  con.query(
    'INSERT INTO user_images (user_id, image_url) VALUES (?, ?)',
    [userId, imageUrl],
    (err, result) => {
      if (err) {
        console.error('Error saving image URL:', err);
        return res.status(500).send({ message: 'Error saving image URL' });
      }
      res.send({ message: 'Image uploaded and saved successfully', imageUrl });
    }
  );
});

module.exports = router;
