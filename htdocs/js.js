var http = require('htpp');
var fs = require('fs');
http.createserver(function (req,res)
{
    fs.readFile('login.html',function(err,data)
    {
        res.writehead(200, {'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8082);
