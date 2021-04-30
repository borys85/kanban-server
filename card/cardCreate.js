const Card = require('./model');


function cardCreate (req, res) {

    const newCard = new Card({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
    });

    newCard
        .save()
        .then(() => {
            res.status(200).json('Card created');
        })
        .catch(() => {
            res.status(400).json('Card not created');
        })
        .finally(() => {
            console.log('The end');
        });
        //res.send('Card was created')
    };

module.exports = cardCreate;

