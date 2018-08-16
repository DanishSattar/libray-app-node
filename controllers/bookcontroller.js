const Book = require('../models/book.js');

//Simple version, without validation or sanitation
exports.index = function (req, res) {
    res.send('Greetings from the Book controller!');
};
