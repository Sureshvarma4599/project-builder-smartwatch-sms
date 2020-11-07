setInterval(displayclock,500)
function displayclock(){
  var time= new Date();
  var hrs=time.getHours();
  var min=time.getMinutes();
  

  if(hrs>12){
    hrs=hrs-12 ;
  }
  if(hrs==0){
    hrs=12;
  }
  if(hrs<10){
    hrs="0"+hrs;
  }
  
  
  if(min<10){
    min="0"+min
  }
  document.getElementById("demo").innerHTML=hrs +" : "+ min;
  document.getElementById("demo1").innerHTML=hrs +" : "+ min;

}
/*
  var msg=document.getElementById("img-1")
  msg.addEventListener("click",message);
  function message(){
      document.getElementById("msggg").style.visibility="block";
  }
*/
function myImg(){
  document.getElementById("demo").style.display="none";
  document.getElementById("demo").className="demo2";
  document.getElementById("demo2").style.display="block";
}/*
var par1=document.getElementById("p1");
par1.addEventListener("click",myFun);
function myFun(){
  document.getElementById("p1").className="html";
  document.getElementById("html").style.display="block";
  document.getElementById("demo2").style.display="none";
  document.getElementById("p1").style.display="none";
  document.getElementById("p2").style.display="none";
  document.getElementById("p3").style.display="none";
  document.getElementById("demo2").style.display="none";
  
}*/
function pOne(){
  document.getElementById("p1").style.display="none";
  document.getElementById("p2").style.display="none";
  document.getElementById("p3").style.display="none";
  document.getElementById("html").style.display="block";
}

function p2(){
  
  document.getElementById("p1").style.display="none";
  document.getElementById("p2").style.display="none";
  document.getElementById("p3").style.display="none";
  document.getElementById("html").innerHTML="Cascading style sheets";
  document.getElementById("html").style.display="block";
}

function p3(){
  
  document.getElementById("p1").style.display="none";
  document.getElementById("p2").style.display="none";
  document.getElementById("p3").style.display="none";
  document.getElementById("html").innerHTML="Java Script";
  document.getElementById("html").style.display="block";
}