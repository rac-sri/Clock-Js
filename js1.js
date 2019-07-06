class dates
{
	constructor()
	{
        var d=new Date();
		var date=d.getDate();
		var mon=d.getMonth()+1;
		var year=d.getFullYear();
		var ret=`${date} / ${mon} / ${year}`;  
		var ele=document.getElementsByClassName("date");
       
		ele[0].innerHTML=ret;
		
	}
}
var obj=new dates();

function viewList()
{
	$(".list").fadeIn(3000);

	//var c=document.querySelector(".list");
	//c.style.display= "block";
	document.querySelector(".box").style.height="700px";
	document.getElementById("btn").onclick=hideList;
   
}
function val(p)
{
  var i=document.getElementsByClassName("valued");
  var j=document.createAttribute("value");
  j.value=p.textContent;
  i[0].setAttributeNode(j);
}       
function hideList()
{
var c=document.querySelector(".list");
	c.style.display= "none";
	document.querySelector(".box").style.height="500px";
	document.getElementById("btn").onclick=viewList;
}