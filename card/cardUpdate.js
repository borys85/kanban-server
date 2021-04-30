const Card = require('./model');

function cardUpdate(req, res) {
    const cardId = req.params.cardId;
    Card.updateOne({ _id: cardId }, req.body)
        .exec()
        .then(() => {
            res.status(200).json('card was updated successfully');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("card wasn`t updated");
        });
}

module.exports = cardUpdate;