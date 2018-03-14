require("dotenv").config();
let express = require("express"),
    app = express(),
    cors = require('cors'),
    bodyParser = require("body-parser"),
    db = require("./models"),
    todoRoutes = require('./routes/todos'),
    port = 3001;

app.use(cors());
// Needed for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// ----
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log(`Server is listening on port ${port}`);
});