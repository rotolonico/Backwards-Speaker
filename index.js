"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/usertext", function(req, res) {
  var input =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.userText
      ? req.body.result.parameters.userText
      : "Something has gone terribly wrong! Try again";

      input = input.split('');
      var speech;
      for (i = input.length; i < 0; i--){
          speech += input[i];
      }
      speech = speech.join("");
      
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-guess-my-phrase"
  });
});