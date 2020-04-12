const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Receipt = new Schema(
    {
        userId: { type: String },
        date: { type: Number },
        fullPrice: { type: Number },
        items: [{
            name: { type: String },
            quantity: { type: Number },
            category: { type: String }, 
            subcat: { type: String },
            price: { type: Number }
        }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('receipts', Receipt)