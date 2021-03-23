/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/ChatMachine.js":
/*!*********************************!*\
  !*** ./frontend/ChatMachine.js ***!
  \*********************************/
/***/ ((module) => {

eval("var ChatMachine = function($el){\n  this.$messages = $el.find(\"ul\");\n  //finds the messages from ul in el and stores them in a var\n  this.$form = $el.find(\"form\");\n  //finds the form from el\n  this.$form.on(\"submit\", this.submitMessage.bind(this));\n  //creates an event handler and binds 'this' to it, so that when its called function style it still has chatmachine as its 'this'\n};\n\nChatMachine.prototype.submitMessage = function (e) {\n  e.preventDefault();\n  //takes in an event and prevents the default behavior of submitting a request\n  $.ajax({\n    method: \"POST\",//type of request\n    url: \"/messages\",//where this post goes to, messages controller, action create\n    dataType: \"json\",//sets the data type to json, so controller doesn't think its an html request\n    data: this.$form.serialize(),//sets the data to the content of the form, the string version of the key:value pairs\n    success: function(message){//a function that will be executed if this request recieves a 200 status code\n      this.addMessage(message);//makes a message li and adds it to the messages list\n      this.clearForm();//clears the form\n    }.bind(this)//binds the current 'this'\n    //options hash to make an ajax request\n  });\n  //makes a post request using javascript and does not cause a redirect\n  this.addSpinner();\n};\n\nChatMachine.prototype.addMessage = function (message) {\n  var $message = $(\"<li>\").text(message.author + \": \" + message.text);//makes the message an li key:value pair\n  this.$messages.append($message);//appends the message to the message list\n  this.$messages.find(\".loader\").remove();//\n};\n\nChatMachine.prototype.clearForm = function () {\n  this.$form.find(\"input[type='text']\").val(\"\");//clears the form of input type text\n};\n\nChatMachine.prototype.addSpinner = function () {\n  this.$messages.append('<div class=\"loader\">Loading...</div>');\n};\n\n\n\nmodule.exports = ChatMachine;\n\n\n//# sourceURL=webpack:///./frontend/ChatMachine.js?");

/***/ }),

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//js goes here :)\nvar ChatMachine = __webpack_require__(/*! ./ChatMachine.js */ \"./frontend/ChatMachine.js\");\n\n$(function(){\n  new ChatMachine($('.chat'));\n});\n//callback by using dollar it uses the function as soon as the document is loaded\n//looks through the dom for something with class of chat\n\n\n//# sourceURL=webpack:///./frontend/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/app.js");
/******/ 	
/******/ })()
;