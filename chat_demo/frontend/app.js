//js goes here :)
var ChatMachine = require("./ChatMachine.js");

$(function(){
  new ChatMachine($('.chat'));
});
//callback by using dollar it uses the function as soon as the document is loaded
//looks through the dom for something with class of chat
