const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let cards = [
    { id: '1', name: 'learn English', status: 'to do', priority: 5},
    { id: '2', name: 'learn Express', status: 'to do', priority: 5},
    { id: '3', name: 'learn React', status: 'to do', priority: 5}
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// роутер (маршрутизатор)
app.get('/card', (req, res) => {
// контроллер - тот, кто обрабатывает запрос и подготавливает ответ.
    res.send(cards)
})

app.delete('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId)
    res.send(cards)
})

app.post('/card', (req, res) => {
    let cardId = Math.random()
    const newCard = {...req.body, id: cardId + ''};
    cards = [...cards, newCard]
    res.send(cards)
})

app.patch('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const newData = req.body;
    cards = cards.map(el => (el.id === cardId) ? {...el, ...newData} : el)
    res.send(cards)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})