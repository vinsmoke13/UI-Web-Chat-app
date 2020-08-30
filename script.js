$('.friend-drawer--onhover').on('click', function() {
  $('.chat-bubble').hide().show();
});

$("#scrollbottom").scrollTop($("#scrollbottom")[0].scrollHeight);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick=function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns=document.getElementsByClassName("dropdown-content");
    var i;
    for(i=0;i<dropdowns.length;i++) {
      var openDropdown=dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns=document.getElementsByClassName("dropdown-content");
    var i;
    for(i=0;i<dropdowns.length;i++) {
      var openDropdown=dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function send() {
   document.getElementById('dis').innerHTML=document.myform.name.value;
}

function showmg() {
  document.getElementById('di').style.display = "block";
}

function res() { 
 document.getElementById("nfor").reset(); 
} 