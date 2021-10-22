$(document).ready(function(){
  $("form#program-quiz").submit(function(event) {
  event.preventDefault();
  const job = $("input:radio[name=job]:checked").val();
  const popular = $("input:radio[name=popular]:checked").val();
  const difficulty = $("input:radio[name=difficulty]:checked").val();
  const color = $("input:radio[name=color]:checked").val();
  let js = 0;
  let c = 0;
  let ruby = 0;
  let sql = 0;

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

  if (js >= ruby && js >= c && js >= sql) {
    $("#javascript").show();
  } else if (ruby >= js && ruby >= c && ruby >= sql) {
    $("#ruby").show();
  } else if (c >= js && c >= ruby && c >= sql) {
    $("#c").show();
  } else {
    $("#sql").show();
  }

  $("#quiz").hide();
  });
});