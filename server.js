var express = require('express');
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'baaPLKJpjpCo9QGk4nmBJbpc-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'uG4ajLuhmuLPhHpVB4VbOFVk',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'ndMrpOdFWYR0rJVcN0CKExYX'
});
var app = express();
app.use(AV.express())
app.get('/',function(req, res){
    res.end('123');
})
app.listen(process.env.LEANCLOUD_APP_PORT);