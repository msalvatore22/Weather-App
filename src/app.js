const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: "Michael"
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: "Michael"
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text',
    title: "Help",
    name: "Michael"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: "New York",
    forecast: 65
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: "404",
    name: "Michael",
    errorMessage: "Help article not found."
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: "404",
    name: "Michael",
    errorMessage: "Page not found."
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})