const express = require("express");
const PaymentController = express.Router();
var PAYPAL_API = 'https://api-m.sandbox.paypal.com';
var CLIENT =
  'AUJoKVGO3q1WA1tGgAKRdY6qx0qQNIQ6vl6D3k7y64T4qh5WozIQ7V3dl3iusw5BwXYg_T5FzLCRguP8';
var SECRET =
  'EOw8LNwDhM7esrQ3nHfzKc7xiWnJc83Eawln4YLfUgivfx1LGzu9Mj0F5wlarilXDqdK9Q5aHVo-VGjJ';

PaymentController.post('/', function(req, res)
  {
    // 2. Get the payment ID and the payer ID from the request body.

    const { paymentID, payerID, total, currency} = req.body

    // 3. Call /v1/payments/payment/PAY-XXX/execute to finalize the payment.
    express.post(PAYPAL_API + '/v1/payments/payment/' + paymentID +
      '/execute',
      {
        auth:
        {
          user: CLIENT,
          pass: SECRET
        },
        body:
        {
          payer_id: payerID,
          transactions: [
          {
            amount:
            {
              total: total,
              currency: currency
            }
          }]
        },
        json: true
      },
      function(err, response)
      {
        if (err)
        {
          console.error(err);
          return res.sendStatus(500);
        }
        // 4. Return a success response to the client
        res.json(
        {
          status: 'success'
        });
      });
  })

exports.PaymentController = PaymentController;
