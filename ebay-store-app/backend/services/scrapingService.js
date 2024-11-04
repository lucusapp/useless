const puppeteer = require('puppeteer');

const scrapeProduct = async (url) => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Aquí seleccionamos los elementos específicos del producto
        const productData = await page.evaluate(() => {
            const title = document.querySelector('h1.product-title')?.innerText || 'Título no encontrado';
            const price = document.querySelector('.product-price-current')?.innerText || 'Precio no encontrado';
            const description = document.querySelector('.product-description')?.innerText || 'Descripción no encontrada';

            return { title, price, description };
        });

        await browser.close();
        return productData;
    } catch (error) {
        console.error('Error en el scraping:', error);
        throw new Error('Scraping fallido');
    }
};

module.exports = { scrapeProduct };