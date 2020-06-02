$(document).ready(function () {
  //BxSlider loader
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1144,
    responsive: true,
  });

  var posts = [
    {
      title: "Test Title 1",
      date: new Date(),
      content:
        "Proin bibendum mi vitae scelerisque cursus. Vivamus in varius ex, id finibus dolor. Vivamus elit felis, viverra et nulla in, lacinia tincidunt elit. Donec non leo molestie, bibendum urna sed, finibus nisl. Mauris a finibus odio. Morbi ut imperdiet odio. Morbi condimentum ipsum at metus fermentum dapibus.",
    },
    {
      title: "Test Title 2",
      date: new Date(),
      content:
        "Proin bibendum mi vitae scelerisque cursus. Vivamus in varius ex, id finibus dolor. Vivamus elit felis, viverra et nulla in, lacinia tincidunt elit. Donec non leo molestie, bibendum urna sed, finibus nisl. Mauris a finibus odio. Morbi ut imperdiet odio. Morbi condimentum ipsum at metus fermentum dapibus.",
    },
    {
      title: "Test Title 3",
      date: new Date(),
      content:
        "Proin bibendum mi vitae scelerisque cursus. Vivamus in varius ex, id finibus dolor. Vivamus elit felis, viverra et nulla in, lacinia tincidunt elit. Donec non leo molestie, bibendum urna sed, finibus nisl. Mauris a finibus odio. Morbi ut imperdiet odio. Morbi condimentum ipsum at metus fermentum dapibus.",
    },
    {
      title: "Test Title 4",
      date: new Date(),
      content:
        "Proin bibendum mi vitae scelerisque cursus. Vivamus in varius ex, id finibus dolor. Vivamus elit felis, viverra et nulla in, lacinia tincidunt elit. Donec non leo molestie, bibendum urna sed, finibus nisl. Mauris a finibus odio. Morbi ut imperdiet odio. Morbi condimentum ipsum at metus fermentum dapibus.",
    },
    {
      title: "Test Title 5",
      date: new Date(),
      content:
        "Proin bibendum mi vitae scelerisque cursus. Vivamus in varius ex, id finibus dolor. Vivamus elit felis, viverra et nulla in, lacinia tincidunt elit. Donec non leo molestie, bibendum urna sed, finibus nisl. Mauris a finibus odio. Morbi ut imperdiet odio. Morbi condimentum ipsum at metus fermentum dapibus.",
    },
    {
      title: "Test Title 6",
      date: new Date(),
      content:
        "Proin bibendum mi vitae scelerisque cursus. Vivamus in varius ex, id finibus dolor. Vivamus elit felis, viverra et nulla in, lacinia tincidunt elit. Donec non leo molestie, bibendum urna sed, finibus nisl. Mauris a finibus odio. Morbi ut imperdiet odio. Morbi condimentum ipsum at metus fermentum dapibus.",
    },
  ];

  var socialPng = $(".socialPng");

  socialPng.click(function () {
    if ($(this).attr("alt") == "FbP") {
      window.location = "http://facebook.com";
    } else if ($(this).attr("alt") == "IgP") {
      window.location = "http://instagram.com";
    } else {
      window.location = "http://twitter.com";
    }
  });

  posts.forEach((item) => {
    var post = `<article id="post">
    <h4 id="title">${item.title}</h4>
    <span id="postInf">${item.date}</span>
    <p id="postDetail">${item.content}</p>
  </article>`;
    $("#posts").append(post);
  });

  $(".goUp").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "0px" }, 600);
    return false;
  });

  $("#login").submit(function () {
    var email = $("#email").val();
    localStorage.setItem("email", email);
  });

  $("#login").submit(function () {
    var password = $("#password").val();
    localStorage.setItem("pass", password);
  });

  var email = localStorage.getItem("email");

  if (email != null && email != "undefined") {
    var par = $("#sidebar p").html("¡Hola " + email + "!");
    $("#login").hide();

    par.append('<a href="#" id="logout">Logout</a>');

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
});
