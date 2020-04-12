const express = require('express')

const ReceiptCtrl = require('../controllers/receipt-ctrl')

const receiptRouter = express.Router()

receiptRouter.post('/receipt', ReceiptCtrl.createReceipt)
receiptRouter.get('/receipt/:id', ReceiptCtrl.readReceipt)
receiptRouter.get('/receipts', ReceiptCtrl.readAllReceipts)
receiptRouter.put('/receipt/:id', ReceiptCtrl.updateReceipt)
receiptRouter.delete('/receipt/:id', ReceiptCtrl.deleteReceipt)

module.exports = receiptRouter