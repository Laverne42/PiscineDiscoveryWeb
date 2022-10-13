btn.addEventListener('click', function onClick(event) 
{
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);
  
  document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
});
