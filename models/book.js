var mongoose = require('mongoose');

//Books Schema
var bookSchema = mongoose.Schema({
    title:{
        type:String, 
        required: true
    },
    genre:{
        type:String, 
        required: true
    },
    description:{
        type:String, 
        
    },
    author:{
        type:String, 
        required: true
    },
    publisher:{
        type:String, 
    },
    pages:{
        type:String, 
        required: true
    },
    image_url:{
        type:String, 
        required: true
    },
    bio_url:{
        type:String, 
        required: true
    },

    create_date:{
        type:Date,
        default:Date.now  

    }
});

var Book = module.exports = mongoose.model('Book', bookSchema) //make this object accessible from outside

//Get Books

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}
//Get Books
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}
//Add Book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}



