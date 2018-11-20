var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var tabela = document.getElementById("tabela");
			 
function check(){
	return (input.value.length > 0) 
				}
function dodadi(){
	var red = document.createElement("tr"); /*dodavam element nov red*/
		red.setAttribute('id', input.value);
		tabela.appendChild(red);

	var col = document.createElement("td"); /*dodavam element nova kolona*/
		col.appendChild(document.createTextNode(input.value));
		red.appendChild(col);
		
		
	var btn = document.createElement("BUTTON");/*dodavam element button*/
		btn.setAttribute('id', input.value);
    	btn.appendChild(document.createTextNode("Delete"));
    	red.appendChild(btn);

    	btn.addEventListener("click", function(){red.remove()});

    	input.value="";
    	    }

button.addEventListener("click", function(){ 
	if (check()) dodadi()
	});

input.addEventListener("keypress", function(event){
	if (check() && event.keyCode === 13){
		dodadi()	
	}});






