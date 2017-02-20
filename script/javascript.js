
gridNumb = 16;

$(document).ready(function() {

  createGrid(gridNumb);

  $('button').click(function() {
    $('.square').css("background-color","#e8e8e8");
    resp = prompt("Type the number of grids you want")
    if (isNaN(resp)) {
      alert("That's not a valid input")
    } else {
      gridNumb = Number(resp);
      createGrid(gridNumb);
    }
  });
});

createGrid = function(n) {
  $('#wrapper').empty();
  size = (100/n).toString() + "%";
  for (i=1; i<=n*n; i++) {
    $('#wrapper').prepend("<div class='square'></div>");
  }
  $('.square').css("height",size);
  $('.square').css("width",size);
  $('.square').mouseenter(function() {
    $(this).css("background-color","black");
  });
};
