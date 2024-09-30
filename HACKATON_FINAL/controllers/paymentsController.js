const axios = require('axios');

exports.processPayment = async (req, res) => {
  const { amount, token } = req.body;
  try {
    const response = await axios.post('https://api.culqi.com/v2/charges', {
      amount,
      currency_code: 'PEN',
      source_id: token,
      description: 'Compra en tienda'
    }, {
      headers: {
        Authorization: `Bearer ${process.env.CULQI_API_KEY}`,
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar el pago' });
  }
};
