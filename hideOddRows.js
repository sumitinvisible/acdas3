var btn = document.getElementById('button');
btn.addEventListener("click",hideRows );

function hideRows(){
  var oddRow = document.getElementsByClassName('odd');
  //debugger;
  alert(oddRow.length);
for(i=0;i<oddRow.length;i++){
  oddRow[i].style.display="none";
}
}