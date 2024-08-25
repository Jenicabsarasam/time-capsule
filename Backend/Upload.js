const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const mysql = require('mysql2');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dalsvcuxk',
  api_key: '738494493317998',
  api_secret: '*********************************' // Ensure to use your actual API secret
});

// Configure Multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'TimeCapsuleProject', // Cloudinary folder name
    allowedFormats: ['jpg', 'jpeg', 'png'],
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

// Test the database connection
con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// Handle file uploads
router.post('/Upload', upload.array('files'), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  // Get user ID from request body or session
  const userId = req.body.userId; // Make sure to include userId in your request

  const filePromises = req.files.map((file) => {
    const imageUrl = file.path;

    // Save image URL to the database
    return new Promise((resolve, reject) => {
      con.query(
        'INSERT INTO user_images (user_id, image_url) VALUES (?, ?)',
        [userId, imageUrl],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve({ imageUrl });
          }
        }
      );
    });
  });

  Promise.all(filePromises)
    .then((results) => {
      res.json({ message: 'Files uploaded successfully!', files: results });
    })
    .catch((err) => {
      console.error('Error saving to database:', err);
      res.status(500).json({ message: 'Error saving to database', error: err });
    });
});

module.exports = router;
