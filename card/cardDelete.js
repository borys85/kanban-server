const Card = require('./model');

function cardDelete (req, res) {
    const cardId = req.params.cardId;
    Card.deleteOne({ _id: cardId })
        .exec()
        .then(() => {
            res.status(200).json('card was deleted successfully');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('card wasn`t deleted');
        });
}

module.exports = cardDelete;

