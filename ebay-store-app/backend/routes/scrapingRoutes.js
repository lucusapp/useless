const express = require('express');
const { scrapeProduct } = require('../services/scrapingService');
const router = express.Router();

router.post('/scrape', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL es requerida' });
    }

    try {
        const productData = await scrapeProduct(url);
        res.json(productData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
