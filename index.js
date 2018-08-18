const express = require('express');
const body = require('connect-multiparty')();
const app = express();
const mongoose = require('mongoose');
const config = require('./configuraciones/config');
const rutas = require('./rutas/public');
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET_NAME;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};
//app.use(allowCrossDomain);

app.get('/account', (req, res) => res.render('account.html'));

app.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  });

  app.post('/save-details', (req, res) => {
    // TODO: Read POSTed form data and do something useful
  });


app.use('/', body, rutas);
mongoose.connect(config.DB, error => {
    if(error) {
        console.log(error);
    } else {
        console.log("Conexion con DB establecida");
    }
});

app.listen(config.SERVER.port, error => {
    if(error) {
        console.log(error);
    } else {
        console.log("Servidor corriendo en el puerto ", config.SERVER.port);
    }
});