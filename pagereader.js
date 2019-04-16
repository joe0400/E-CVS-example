var txt = new XMLHttpRequest();

txt.open("GET","100-0.txt",true);
txt.responseType = "text";

txt.onreadystatechange = function(){
	var lines;
var text;
	text = txt.response;
	lines = txt.response.split("ACT ");
	for(var j = 0;j<lines.length;j++){
		lines[j].split('\n');
	}
	for(var i = 0;i<lines.length;i++){
		if(i == 0){
			document.getElementById("generatedlinks").innerHTML+="<li class=\"nav-item active\"><a class=\"nav-link\" href=\"#ACT" + lines[i][0] +"\">ACT"+lines[i][0]+"</a></li>";
	}
	else{
		document.getElementById("generatedlinks").innerHTML+="<li class=\"nav-item\"><a class=\"nav-link\" href=\"#ACT" + lines[i][0] +"\">ACT"+lines[i][0]+"</a></li>";
	}
}

for(var i = 0;i<lines.length;i++){

	for(var j = 0;j<lines[i].length;j++){
		if(j == 0){
			document.getElementById("generatedtext").innerHTML+="<div class=\"row\"><div class=\"col\"></div><div class=\"col-8\"><h4 id=\"ACT"+lines[i][j]+"\">ACT"+lines[i][j]+"</h4><br>";
		}
		document.getElementById("generatedtext").innerHTML+=lines[i][j];
		if(j+1!=lines[i].length){
			document.getElementById("generatedtext").innerHTML+="<br>";
		}
	}
	document.getElementById("generatedtext").innerHTML+="</div><div class=\"col\"></div></div>";
	}
	
	
}

txt.send(null);
