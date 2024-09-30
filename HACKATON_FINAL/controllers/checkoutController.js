const Purchase = require('../models/Purchase');

exports.createPurchase = async (req, res) => {
  const { userId, products, total } = req.body;
  const purchase = new Purchase({ userId, products, total });
  await purchase.save();
  res.status(201).json(purchase);
};
