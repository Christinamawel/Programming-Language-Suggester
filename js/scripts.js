$(document).ready(function(){
  $("form#program-quiz").submit(function(event) {
  event.preventDefault();
  const job = $("input:radio[name=job]:checked").val();
  const popular = $("input:radio[name=popular]:checked").val();
  const difficulty = $("input:radio[name=difficulty]:checked").val();
  const color = $("input:radio[name=color]:checked").val();
  const name = $("#name").val();
  const num = parseInt($("#num").val())
  let js = 0;
  let c = 0;
  let ruby = 0;
  let sql = 0;

  $(".insert-name").text(name + ", ");

  if (job === "engineer") {
    js += 1
  } else if (job === "backend") {
    ruby += 1
  } else if (job === "mobile") {
    c += 1
  } else {
    sql += 1
  }

  if (popular === "mostPop") {
    js += 1
  } else if (popular === "changePop") {
    ruby += 1
  } else  {
    c += 1
    sql += 1
  }

  if (difficulty === "easy") {
    ruby += 1
  } else if (difficulty === "hard") {
    c += 1
  } else  {
    js += 1
    sql += 1
  }

  if (color === "blue") {
    js += 1
  } else if (color === "red") {
    ruby += 1
  } else if (color === "green") {
    c += 1
  } else {
    sql += 1
  }
  
  if (num <= 3) {
    js += 1
  } else if (num <= 6) {
    ruby += 1
  } else if (num <= 8) {
    c += 1
  } else if (num <= 10) {
    sql += 1
  } else {
    $("#error").slideDown();
  }

  if (!num) {
  } else if (js >= ruby && js >= c && js >= sql) {
    $("#javascript").fadeIn();
  } else if (ruby >= js && ruby >= c && ruby >= sql) {
    $("#ruby").fadeIn();
  } else if (c >= js && c >= ruby && c >= sql) {
    $("#c").fadeIn();
  } else {
    $("#sql").fadeIn();
  }

  if (num >= 0 && num <= 10) {
    $("#quiz").hide();
  }
  });

  $(".go-back").click(function(event) {
    event.preventDefault();
    $("#quiz").show();
    $(".result").hide();
  });
});