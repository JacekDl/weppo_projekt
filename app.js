var http = require('http');
var express = require('express');
var ejs = require('ejs');
const path = require('path');
//var todoRepo = require('./todos');
const { application } = require('express');
var app = express();

//var json = express.json();

//app.disable('etag');


app.set('views', './views');
app.set('view engine', 'ejs');

app.use( express.static(path.join(__dirname,'public')))

app.use((req,res)=> {
	res.render('index',{username:'admin'});
});
/*
app.get( '/api/todo', (req, res) => {
	res.json( todoRepo.getTodos() );
});

	app.post( '/api/todo', json, (req, res) => {
	// middleware json od razu parsuje request
	var todo = req.body;
	var description = todo.description;
	// dodawanie
	var todo = todoRepo.addTodo(description);
	// zwrócenie do klienta
	res.json( todo );
});
app.put( '/api/todo/:id', json, (req, res) => {
	// middleware json od razu parsuje request
	var todo = req.body;
	// powinna być walidacja!
	// modyfikacja
	var id = req.params.id;
	todo = todoRepo.updateTodo(id, todo.description);
	// zwrócenie do klienta
	res.json(todo);
})
app.delete( '/api/todo/:id', (req, res) => {
	// usuwanie
	var id = req.params.id;
	todoRepo.removeTodo(id);
	res.status(200);
	res.end();
});
app.get( '/', (req, res) => {
	res.render( 'app' );	
})
*/
http.createServer(app).listen(process.env.PORT || 3000);
console.log( 'serwer działa' );
