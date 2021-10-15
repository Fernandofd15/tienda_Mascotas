const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');

module.exports = function(){
   //post:customers
   router.post('/customers', customersController.add);
   // get: /customers
   router.get('/customers', customersController.list);
   
   //leer cliente
   //get: /customers/:id
   router.get('/customers/:id', customersController.show);
   
   //Put:/customers/:id
   router.put('/customers/:id', customersController.update);
   // delete:/customers/:id
   router.delete('/customers/:id', customersController.delete);
  
   return router; 
}