const express = require('express');
const dotenv = require('dotenv');
const ebayRoutes = require('./routes/ebayRoutes');

dotenv.config();
const app = express();

app.use(express.json());

// Rutas
app.use('/api/ebay', ebayRoutes);

//conexion con el frondend
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});