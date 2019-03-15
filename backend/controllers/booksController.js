const Books = require('../model/Books')

module.exports = {
    findAll: function (req, res) {
        Book.find(req.query)
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        Book.findById(req.param.id)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Book.create(req.body)
            .then(newBook => res.json(newBook))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        Book.findOneAndUpdate({ _d: req.params.id }, req.body)
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Books.findById({ _id: req.param.id })
            .then(book => book.remove())
            .then(allbooks => res.json(allbooks))
            .catch(err => res.status(422).json(err));
    }
};