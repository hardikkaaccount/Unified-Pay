// models/FLHistory.js

import mongoose from 'mongoose';

const FLHistorySchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    loan: {
        type: Number,
        required: true
    },
    pl: {
        type: Number,
        required: true
    }
});

const FLHistory = mongoose.model('FLHistory', FLHistorySchema);

export default FLHistory;
