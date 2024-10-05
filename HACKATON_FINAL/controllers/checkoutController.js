const Purchase = require('../models/Purchase');

exports.createPurchase = async (req, res) => {
    try {
        const { userId, products, total } = req.body; 
        const purchase = new Purchase({ userId, products, total });
        await purchase.save();
        res.status(201).json({ message: 'Compra creada', purchase });
    } catch (error) {
        console.error('Error al crear la compra:', error);
        res.status(500).json({ error: 'Error al crear la compra' });
    }
};
