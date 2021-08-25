const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', expressHandlebars({
    defaultLayout : 'main'
}))

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const days = [
    'Monday',
    'Sunday',
    'Friday',
    'Dushanba',
    'Seshanba',
    'Chorshanba'
]

const port = process.env.PORT || 4030

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    const randomDay = days[Math.floor(Math.random()*(days.length))]
    res.render('about', {day : randomDay})
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {
    res.status(500)
    res.render('500')
})

app.listen(port, ()=> console.log(
    `Express запущень на порте http://localhost:${port} 
    нажмите Crtl+C для заверщения`))
