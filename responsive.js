let showcase1 = document.getElementById("showcase_h1");
let showcase2 = document.getElementById("showcase_p");

if(window.innerWidth <= 600)
{
    showcase1.style.color="#E8491D";
    showcase2.style.color="#E8491D";
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
};

