var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.set('port',(process.env.PORT || 3000));

app.get('/',function(req,res){
    res.render('home',{
        content:'this is some content ',
        published:true
    });
})

app.listen(app.get('port'),function(){
    console.log('server start on port'+app.get('port'));
});
