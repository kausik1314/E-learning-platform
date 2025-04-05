const connectDB = require('./config/db');
connectDB();


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginRoutes = require('./routes/login.js');
const registerRoutes = require('./routes/register.js');
const contactRoutes = require('./routes/contact.js');

const app = express();
const path = require('path');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route use
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/contact', contactRoutes);

// app.get('/', (req, res) => {
//   res.send('Pravaah LMS Backend Running ✅');
// });


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.use(express.static(path.resolve(__dirname, '../')));


app.listen(PORT, () => {
  console.log('🚀 Server is running on http://localhost:' + PORT);
});