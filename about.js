let resume_text = document.getElementById("resume").getElementsByTagName("p");

if(window.innerWidth <= 600)
{
    
	for (let i=0; i<resume_text.length; i++){
			resume_text[i].style.float = "left";
			resume_text[i].style.paddingLeft = "0";
			resume_text[i].style.paddingTop = "0";
		}
}
window.onresize = function(){
    if (window.innerWidth <= 600)
    {
        
		for (let i=0; i<resume_text.length; i++){
			resume_text[i].style.float = "left";
			resume_text[i].style.paddingLeft = "0";
			resume_text[i].style.paddingTop = "0";
		}
		
    }
    else
    {
        
		for (let i=0; i<resume_text.length; i++){
			resume_text[i].style.float = "";
			resume_text[i].style.paddingLeft = "10em";
			resume_text[i].style.paddingTop = "20px";
		}
    }
};
