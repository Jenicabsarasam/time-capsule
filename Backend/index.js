const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this if necessary
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

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

// Routes
app.post('/register', (req, res) => {
  const { username, email, mobile, password } = req.body;

  if (!username || !email || !mobile || !password) {
    return res.status(400).send({ message: 'All fields are required' });
  }

  con.query(
    'INSERT INTO users (username, email, mobile, password) VALUES (?, ?, ?, ?)',
    [username.trim(), email.trim(), mobile.trim(), password.trim()],
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send({ message: 'Error inserting data' });
        return;
      }
      res.send({ message: 'User registered successfully' });
    }
  );
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ message: 'Username and password are required' });
  }

  con.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username.trim(), password.trim()],
    (err, results) => {
      if (err) {
        console.error('Error querying data:', err);
        res.status(500).send({ message: 'Error querying data' });
        return;
      }

      if (results.length > 0) {
        res.send({ message: 'Login successful', success: true });
      } else {
        res.send({ message: 'Wrong username or password', success: false });
      }
    }
  );
});

// Start the server
app.listen(4000, () => {
  console.log('Backend server is running on port 4000!');
});
