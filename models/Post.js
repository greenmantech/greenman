const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: { type: Number, required: true }, // String type for testing. @todo - Update yo use user ref
    coordinates: { type: [Number], required: true },
    image: { type: String, required: true },
    status: { type: String, enum: ['resolved', 'unresolved'], default: 'unresolved', required: true },
    date: { type: String, default: Date.now }
})

module.exports = Admin = mongoose.model('posts', PostSchema)