var express = require('express');
var app = express();

app.use(express.static(__dirname));



var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
