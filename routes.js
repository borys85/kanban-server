const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdate = require("./card/cardUpdate");

function routes(app) {

// роутер (маршрутизатор)
    app.get('/', (req, res) => {
// контроллер - тот, кто обрабатывает запрос и подготавливает ответ.
        res.send('Hello World!')
    })

    app.get('/card', cardGetAll)
    app.post('/card', cardCreate)
    app.patch('/card/:cardId', cardUpdate)
    app.delete('/card/:cardId', cardDelete)
}

module.exports = routes;