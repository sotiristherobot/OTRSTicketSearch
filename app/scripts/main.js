(function () {

  var ticket = function (id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }


  var ticket_test = new ticket(1, "kokos-tromeors", "o kokos einai apo tin kokia");

  console.log(ticket_test);

})();
