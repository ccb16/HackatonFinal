const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const checkoutRoutes = require('./routes/checkout');
const paymentsRoutes = require('./routes/payments');
const purchasesRoutes = require('./routes/purchases');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(error => console.log(error));

app.use('/api/home', homeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/purchases', purchasesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
