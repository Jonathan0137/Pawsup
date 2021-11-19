const express = require("express"); 
const path = require("path"); 
const app = express(); 
const paypal = require("paypal-rest-sdk");

const PaymentController = express.Router();
var PAYPAL_API = 'https://api-m.sandbox.paypal.com';

  paypal.configure({
    'mode': 'sandbox', 
    'client_id': 'AUJoKVGO3q1WA1tGgAKRdY6qx0qQNIQ6vl6D3k7y64T4qh5WozIQ7V3dl3iusw5BwXYg_T5FzLCRguP8',
    'client_secret': 'EOw8LNwDhM7esrQ3nHfzKc7xiWnJc83Eawln4YLfUgivfx1LGzu9Mj0F5wlarilXDqdK9Q5aHVo-VGjJ'
  });

  // start payment process 
PaymentController.post("/", async (req , res) => {
  const { total, redirect } = req.body;

  if (!total || !redirect) {
    return res.status(400).json({
      message: "Fields are missing from request body. Requires a subtotal and a redirect URL.",
    });
	// create payment object 
  }
  

    var payment = {
            "intent": "authorize",
	"payer": {
		"payment_method": "paypal"
	},
	"redirect_urls": {
    /*"return_url": "http://127.0.0.1:3000/success",
		"cancel_url": "http://127.0.0.1:3000/err"*/
		"return_url": redirect,
		"cancel_url": redirect
	},
	"transactions": [{
		"amount": {
			"total": total,
			"currency": "CAD"
		},
		"description": " Your PawsApp purchase "
	}]
    }
	
	
	// call the create Pay method 
    createPay( payment ) 
        .then( ( transaction ) => {
            var id = transaction.id; 
            var links = transaction.links;
            var counter = links.length; 
            while( counter -- ) {
                if ( links[counter].method == 'REDIRECT') {
					// redirect to paypal where user approves the transaction 
                    return res.redirect( links[counter].href )
                }
            }
        })
        .catch( ( err ) => { 
            console.log( err ); 
            return res.status(500).json({
              message: `Payment failed. We'll get 'em next time.`,
            });
        });
}); 

var createPay = ( payment ) => {
  return new Promise( ( resolve , reject ) => {
      paypal.payment.create( payment , function( err , payment ) {
       if ( err ) {
           reject(err); 
       }
      else {
          resolve(payment); 
      }
      }); 
  });
}				

exports.PaymentController = PaymentController;
