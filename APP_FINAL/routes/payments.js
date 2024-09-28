const express = require('express');
const Culqi = require('culqi-node');
const router = express.Router();


require('dotenv').config();


const culqi = new Culqi({
    privateKey: process.env.CULQI_PRIVATE_KEY
});


router.post('/pay', async (req, res) => {
    const { token, amount, currency_code, email } = req.body;

    try {
       
        const charge = await culqi.charges.create({
            amount: amount,
            currency_code: currency_code,
            email: email,
            source_id: token
        });

        res.json({ success: true, charge });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
