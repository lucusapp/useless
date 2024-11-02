const axios = require('axios');

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://api.ebay.com/.../product/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.EBAY_ACCESS_TOKEN}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
};

module.exports = { getProduct };
