const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const ebayRoutes = require('./routes/ebayRoutes');
const scrapingRoutes = require('./routes/scrapingRoutes');

dotenv.config();
const app = express();

// Configurar CORS para solicitudes desde tu frontend
app.use(cors({
    origin: 'https://automatic-space-sniffle-q799r5rj96rfqq6-3000.app.github.dev',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

// Manejo de solicitudes preflight (OPTIONS)
app.options('*', cors());

// Middleware de encabezados CORS manual
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://automatic-space-sniffle-q799r5rj96rfqq6-3000.app.github.dev');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

// Rutas
app.use('/api/ebay', ebayRoutes);
app.use('/api/scrape', scrapingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
