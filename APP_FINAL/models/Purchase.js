const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
