const culqi = require('culqi'); // Asegúrate de que tienes la librería de Culqi instalada y configurada

// Configura tu clave secreta
culqi.publicKey = 'tu_clave_publica';
culqi.secretKey = 'tu_clave_secreta';

exports.processPayment = async (req, res) => {
    try {
        const { amount, token } = req.body; // Obtiene el monto y el token del cuerpo de la solicitud

        // Realiza el pago utilizando la API de Culqi
        const charge = await culqi.charges.create({
            amount,
            currency: 'PEN', // O la moneda que estés utilizando
            description: 'Descripción del producto',
            email: 'cliente@example.com', // Email del cliente
            source: token,
        });

        // Enviar respuesta exitosa
        res.status(200).json(charge);
    } catch (error) {
        console.error('Error al procesar el pago:', error);
        res.status(500).json({ error: 'Error al procesar el pago' });
    }
};
