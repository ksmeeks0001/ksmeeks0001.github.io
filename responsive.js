let showcase1 = document.getElementById("showcase_h1");
let showcase2 = document.getElementById("showcase_p");
let langs = document.getElementsByClassName("box");

if(window.innerWidth <= 600)
{
    showcase1.style.color="#E8491D";
    showcase2.style.color="#E8491D";
	
}
if(window.innerWidth <= 766)
{
	for(let i=0; i<langs.length; i++)
	{
		langs[i].style.float="none";
		langs[i].style.width="auto";
	}
}
	
window.onresize = function(){
    if (window.innerWidth <= 600)
    {
        showcase1.style.color="#E8491D";
        showcase2.style.color="#E8491D";
		
    }
    else
    {
        showcase1.style.color="white";
        showcase2.style.color="white";
	
    }
	if (window.innerWidth <=766)
	{
		for(let i=0; i<langs.length; i++)
		{	
			langs[i].style.float="none";
			langs[i].style.width="auto";
		}
	}
	else 
	{
		for(let i=0; i<langs.length; i++)
		{	
			langs[i].style.float="left";
			langs[i].style.width="30%";
		}
	}
};

