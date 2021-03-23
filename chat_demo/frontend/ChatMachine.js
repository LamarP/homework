var ChatMachine = function($el){
  this.$messages = $el.find("ul");
  //finds the messages from ul in el and stores them in a var
  this.$form = $el.find("form");
  //finds the form from el
  this.$form.on("submit", this.submitMessage.bind(this));
  //creates an event handler and binds 'this' to it, so that when its called function style it still has chatmachine as its 'this'
};

ChatMachine.prototype.submitMessage = function (e) {
  e.preventDefault();
  //takes in an event and prevents the default behavior of submitting a request
  $.ajax({
    method: "POST",//type of request
    url: "/messages",//where this post goes to, messages controller, action create
    dataType: "json",//sets the data type to json, so controller doesn't think its an html request
    data: this.$form.serialize(),//sets the data to the content of the form, the string version of the key:value pairs
    success: function(message){//a function that will be executed if this request recieves a 200 status code
      this.addMessage(message);//makes a message li and adds it to the messages list
      this.clearForm();//clears the form
    }.bind(this)//binds the current 'this'
    //options hash to make an ajax request
  });
  //makes a post request using javascript and does not cause a redirect
  this.addSpinner();
};

ChatMachine.prototype.addMessage = function (message) {
  var $message = $("<li>").text(message.author + ": " + message.text);//makes the message an li key:value pair
  this.$messages.append($message);//appends the message to the message list
  this.$messages.find(".loader").remove();//
};

ChatMachine.prototype.clearForm = function () {
  this.$form.find("input[type='text']").val("");//clears the form of input type text
};

ChatMachine.prototype.addSpinner = function () {
  this.$messages.append('<div class="loader">Loading...</div>');
};



module.exports = ChatMachine;
