const mongoose = require('mongoose');
const course_shcema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    author: { type: String, required: true },
    tags: [String],
    price: { type: Number, required: function () { return this.isPublished } },
    date: { type: Date, default: Date.now() },
    isPublished: Boolean
});



const Course = mongoose.model('Course', course_shcema);

module.exports.Course = Course
