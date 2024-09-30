const Purchase = require('../models/Purchase');

exports.getPurchases = async (req, res) => {
  const { userId } = req.params;
  try {
    const purchases = await Purchase.find({ userId }).populate('products.productId');
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las compras' });
  }
};
