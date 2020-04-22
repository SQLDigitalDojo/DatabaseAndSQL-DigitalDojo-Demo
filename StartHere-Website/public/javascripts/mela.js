
window.onload = function () {
  $("#search-button").on('click', function (event) {

    console.log("Value: " + $("#searchField").val());

    $.getJSON("/clients/search/?id=" + $("#searchField").val(), function (result) {
      var c = [];
      $.each(result, function (i, item) {
        c.push("<tr><td>" + item.Nome + "</td>");
        c.push("<td>" + item.Indirizzo + "</td>");
        c.push("<td>" + item.username + "</td></tr>");
      });
      $('#clients-table').html(c.join(""));
    })
  });

  $("#add-client").submit(function (event) {
    event.preventDefault();

    var nameText = $("#add-client-name").val();
    var addressText = $("#add-client-address").val();
    var usernameText = $("#add-client-username").val();
    var passwordText = $("#add-client-password").val();

    console.log(nameText,addressText, usernameText, passwordText);
    $.ajax({
      url: "/clients/add",
      type: "POST",
      data: { name: nameText, address: addressText, username: usernameText, password: passwordText },
      success: function (html) {
        Swal.fire(
          'Aggiunto!',
          'Hai aggiunto il cliente',
          'success'
        )
      },
      error: function (html) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qualcosa è andato storto'
        })
      }
    });
  })
}

function updateMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
