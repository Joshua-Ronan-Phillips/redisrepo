
document.getElementById('submit').addEventListener('click', function(){
  var input = document.getElementById("input").value;
  console.log(input);
  var request = new XMLHttpRequest();
  request.onreadystatechange=function(){
     if(request.readyState === 4){
      console.log(request.responseText);
     }
  request.open("POST", "/post/" + input, true);
  request.send(input);
  };
});
