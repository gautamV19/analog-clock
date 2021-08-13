setInterval(() => {
  d = new Date();
  h = d.getHours() % 12;
  m = d.getMinutes();
  s = d.getSeconds();

  // console.log(h, m, s);

  let hrotation = 30 * h + m / 2;
  let mrotation = 6 * m;
  let srotation = 6 * s;

  // console.log(hrotation, mrotation, srotation);
  $("#second").hide();

  $("#second").css({
    transform: `rotate(${srotation}deg)`,
  });
  $("#second").show();
  $("#minute").css({
    transform: `rotate(${mrotation}deg)`,
  });
  $("#hour").css({
    transform: `rotate(${hrotation}deg)`,
  });
}, 1000);
