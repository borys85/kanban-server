const Card = require('./model');

function cardGetAll(req, res) {
    Card.find()
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('card get all error');
        });
}

module.exports = cardGetAll;

