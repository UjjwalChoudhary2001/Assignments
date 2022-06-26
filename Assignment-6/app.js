//Add new todo
$("input").keypress(function (e) {
  if (e.which === 13) {
    const todoText = $(this).val(); //'this' has the  reference of input.
    $("#list").append(
      `<li><span><i class="fa-solid fa-trash-can"></i></span>${todoText}<i class="fa-solid fa-pen"></i></li>`
    );
    $(this).val("");
  }
});

//Mark The Task completed
$("ul").on("click", "li", function () {
  //When li is clicked ,offcourse ul is clicked and a click event is triggered and thus class is toggled
  $(this).toggleClass("completed"); //'this' has referece to li
});

$("ul").on("click", "span", function (e) {
  e.stopPropagation(); //to stop bubbling
  $(this)
    .parent()
    .fadeOut(600, function () {
      $(this).remove();
    });
});

//fadeToggle()
$("#plus").click(function () {
  $("input").fadeToggle();
});

/*Edit functionality using jquery
$(".fa-pen").click(function (e) {
  e.stopPropagation();
  const newTask = prompt("Enter the new Task");
  // $(this).parent().text(newTask);

  if (newTask) {
    $(this)
      .parent()
      .html(
        `<span><i class="fa-solid fa-trash-can"></i></span>${newTask}<i class="fa-solid fa-pen"></i>`
      );
  }
});
*/

//Edit functionality using jquery for d

$("li").on("click", ".fa-pen", function (e) {
  e.stopPropagation();
  const newTask = prompt("Enter the new Task");
  // $(this).parent().text(newTask);

  if (newTask) {
    $(this)
      .parent()
      .html(
        `<span><i class="fa-solid fa-trash-can"></i></span>${newTask}<i class="fa-solid fa-pen"></i>`
      );
  }
});
