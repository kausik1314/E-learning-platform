const connectDB = require('./config/db');
connectDB();




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route use
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Pravaah LMS Backend Running ✅');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
