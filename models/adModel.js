const mongoose = require('mongoose');

const adSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text: {
            type: String,
            required: [true, 'Please add a text']
        },
        description: {
            type: String,
            required: [true, 'Please add a description']
        },
        price: {
            type: String, 
            required: [true, 'Please add a price Eur']
        }
    },
    {
        timestamps: true
   }
)

module.exports = mongoose.model('Ad', adSchema)