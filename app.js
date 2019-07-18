var express = require('express');
var app =  express(); //object to represent express
var bodyParser = require('body-parser'); //forms
var mongoose = require('mongoose'); //match columns in code from db
app.use(bodyParser.json());
Genre = require('./models/genre');
Book = require('./models/book');



//Connect to mongoose
 mongoose.connect('mongodb://localhost/bookstore');
 var db = mongoose.connection; //create database object
 app.get('/', function(req, res){ // handle get request
    res.send('use api/books');
 });
 app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err,  genres){
       if(err){
          throw err; 
       }
       res.json(genres);

    });
   });
   app.post('/api/genres', function(req, res){
      var genre = req.body; //enable access from the form and put it in genre object
      Genre.addGenres(genre, function(err,  genre){
         if(err){
            throw err; 
         }
         res.json(genre);
  
      });
     });

     app.put('/api/genres/:_id', function(req, res){
        var id = req.params._id;
      var genre = req.body; //enable access from the form and put it in genre object .posting data
      Genre.updateGenres(id, genre, {}, function(err,  genre){
         if(err){
            throw err; 
         }
         res.json(genre);
  
      });
     });

     app.delete('/api/genres/:_id', function(req, res){
        var id  = req.params._id;
        Genre.deleteGenres(id, function( err, genre){
           if(err){
              throw err;
           }
           res.json(genre);

        });

     });

    app.get('/api/books', function(req, res){
      Book.getBooks(function(err,  books){
         if(err){
            throw err; 
         }
         res.json(books);
  
      });
 });
 app.get('/api/books/:_id', function(req, res){
   Book.getBookById(req.params._id, function(err,  book){
      if(err){
         throw err; 
      }
      res.json(book);

   });
});

app.post('/api/books', function(req, res){
   var book = req.body;
   Book.addBook(book, function(err,  book){
      if(err){
         throw err; 
      }
      res.json(book);

   });
});
 
app.listen(5000);
console.log('Running on port 5000...');