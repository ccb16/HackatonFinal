const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: [{ productId: { type: mongoose.Schema.Types.ObjectId, required: true }, quantity: { type: Number, required: true } }],
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
