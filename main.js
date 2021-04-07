var images = ["Dad.png","Mum.jpeg","Bro.png", "Sis.png"];
var text = ["Dad", "Mum", "Brother", "Sister"];
var i=0;
function next(){
    if(i>4){
        i=0;
    }
    document.getElementById("images").src=images[i];
    document.getElementById("name").innerHTML = text[i]; 
    i++;
      
}