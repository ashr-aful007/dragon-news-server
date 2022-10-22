const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());
const categores = require('./data/Catagories.json')
const news = require('./data/news.json')


app.get('/', (req, res) =>{
     res.send('News Api Running');
})

app.get('/news-categoris', (req, res) =>{
     res.send(categores)
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectNews = news.find(n => n._id === id);
    res.send(selectNews)
})

app.get('/news', (req, res) =>{
     res.send(news)
})



app.get('/category/:id', (req, res) =>{
     const id = req.params.id;
     if(id === '08'){
          res.send(news)
     }
     else{
          const category_News = news.filter( n => n.category_id === id);
          res.send(category_News)
     }
})


app.listen(port, () =>{
     console.log('Dragon news Server run;', port)
})