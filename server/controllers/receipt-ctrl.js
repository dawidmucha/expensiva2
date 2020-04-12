const Receipt = require('../models/receipt-model')

createReceipt = (req, res) => {
    const body = req.body
    let receipt

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user'
        })
    }

    receipt = new Receipt(body)

    receipt.save().then(() => {
        return res.status(201).json({
            success: true,
            id: receipt._id,
            message: 'Receipt created!'
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Receipt not created'
        })
    })
}

readReceipt = (req, res) => {
    Receipt.findOne({_id: req.params.id }, (err, rec) => {
        if(err) { res.status(400).json({ success: false, error })}
        
        if(!rec) {
            return res.status(404).json({
                success: false,
                error: 'Recreipt not found',
                errorMessage: err
            })
        }

        return res.status(200).json({
            success: true,
            rec
        })
    }).catch(err => console.log(err))
}

readAllReceipts = (req, res) => {
    Receipt.find({}, (err, recs) => {
        if(err) res.status(400).json({ success: false, err })
        if(!recs.length) {
            return res.status(404).json({
                success: false,
                err: 'receipts not found'
            })
        }
        return res.status(200).json({
            success: true,
            data: recs
        })
    })
}

updateReceipt = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            err: 'you must provide a body to update a receipt'
        })
    }

    Receipt.findOne({ _id: req.params.id }, (err, rec) => {
        if(err || !rec) {
            return res.status(404).json({
                err,
                message: 'Receipt not found!'
            })
        }
        rec.userId = body.userId
        rec.date = body.date
        rec.fullPrice = body.fullPrice
        rec.save().then(() => {
            return rec.status(200).json({
                success: true,
                id: rec._id,
                message: 'Receipt updated'
            })
        }).catch(err => {
            return res.status(404).json({
                err,
                message: 'Receipt not updated'
            })
        })
    })
}

deleteReceipt = (req, res) => {
    Receipt.findOneAndDelete({ _id: req.params.id }, (err, rec) => {
        if(err) {
            return res.status(400).json({
                success: false,
                err
            })
        }

        if(!rec) {
            return res.status(404).json({
                success: false,
                error: 'Receipt not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: user
        })
    }).catch(err => console.log(err))
}

module.exports = {
    createReceipt,
    readReceipt,
    readAllReceipts,
    updateReceipt, 
    deleteReceipt
}