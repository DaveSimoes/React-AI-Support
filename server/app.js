const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const chatRoutes = require('./routes/chatRoutes');
app.use('/api/chat', chatRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
