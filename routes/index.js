var express = require('express');
var router = express.Router();

let fs = require('fs'),
PDFParser = require("pdf2json");

let pdfParser = new PDFParser();


/* GET home page. */
router.get('/', function(req, res, next) {

  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
  pdfParser.on("pdfParser_dataReady", pdfData => {
    res.render('index', { title: 'Express', data: JSON.stringify(pdfData) });

  });
console.log('hello');
  pdfParser.loadPDF("sonyl_nagale_resume_2018.1.pdf");


});

module.exports = router;
