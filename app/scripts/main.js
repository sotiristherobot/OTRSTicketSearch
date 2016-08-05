

(function () {

  var ticket = function (id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }


  function addToHTML(id, title, content){

    var ticket = document.createElement('div'),
        ticket_id = document.createElement("div"),
        ticket_title = document.createElement("div"),
        ticket_content = document.createElement("div");

    ticket.className = "ticket";
    ticket_id.className = "ticket-id col-sm-2";
    ticket_title.className = "ticket-title col-sm-6";
    ticket_content.className = "ticket-content col-sm-4";



    //add content to ticket
    ticket_id.innerHTML = id;
    ticket_title.innerHTML = title;
    ticket_content.innerHTML = content;

    ticket.appendChild(ticket_id);
    ticket.appendChild(ticket_title);
    ticket.appendChild(ticket_content);

    document.getElementById("tickets").appendChild(ticket);



  }

  function searchHTML(element){

    console.log("live searching");
    //using jQuery for live search
    var $t = $('.ticket').hide();


    var regexp = new RegExp($(element).val(), 'i');

    var $valid = $t.filter(function () {
      return regexp.test($(this).find('.ticket-content').text())
    }).show();

    $t.not($valid).hide();


  }



  var ticket_test = new ticket(1, "kokos-tromeors", "o kokos einai apo tin kokia");

  addToHTML(10,"kokos", "kokoui");
  addToHTML(5,"kokos", "kolokithi");
  //live search
  $('#searchbox').on('keyup change', function () {
    searchHTML(this);
  })

  $("#getInput").click(function () {
    console.log("geetin input");
    console.info("Getting input");
  })

})();
