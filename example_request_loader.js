//                    
//  ▄▀▄▀▀▀▀▄▀▄         
//  █░░░░░░░░▀▄      ▄ 
// █░░▀░░▀░░░░░▀▄▄  █░█
// █░▄░█▀░▄░░░░░░░▀▀░░█
// █░░▀▀▀▀░░░░░░░░░░░░█
// █░░░░░░░░░░░░░░░░░░█
// █░░░░░░░░░░░░░░░░░░█
//  █░░▄▄░░▄▄▄▄░░▄▄░░█ 
//  █░▄▀█░▄▀  █░▄▀█░▄▀ 
//   ▀   ▀     ▀   ▀   
//	:)
//	Written by Joseph Scannell
//


const attributors = 100;
var number = 0;

var info = new Array();

var names = ["a","b","c","d","e"];
var usernames = ["f","g","h","i","j"];
var loremIpsum = "lorem ipsum dolor itum";
var tvotes = [99,20,13,40,80];
var dates = [1,8,2,13,12];

for(var i = 0;i<5;i++){
	info.push(new information(names[i],loremIpsum,tVotes[i],loremIpsum,usernames[i],dates[i]);
}

class information{
	constructor(name,information,total_votes,description_text,username,date){
		this.name = name;
		this.information = information;
		this.total_votes = total_votes;
		this.description_text = descritpion_text;
		this.username = username;
		this.toggle = false;
		this.date = date;
		this.number = number;
		info.push(this);
		this.generate();
	}
	
	function viewName(){	return this.name;}
	function viewInfo(){	return this.information;}
	function viewVotes(){	return this.total_votes;}
	function viewDescr(){	return this.description_text;}
	function viewUser(){	return this.username;}
	function viewDate(){	return this.date;)

	function increment(){
		if(this.toggle)
			this.total_votes--;
		else
			this.total_votes++;
		this.toggle = !this.toggle;
		document.getElementByID(this.number.toString()).innerHTML = Number(this.viewVotes()/attributors).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
	}
	
	function generate(){
		info = "<li class=\"list-group-item\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">${this.name}</h5><small class=\"text-right text-nowrap\">${this.date} days ago <u class=\"text-warning\" id=\"${this.number}\" style=\"text-decoration: none !important;\"></u></small></div><small> @${this.username} </small><p class=\"mb-1\">${this.description_text}</p><div class=\"btn-group float-right\" role=\"group\" aria-label=\"Support\"><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" onclick=\"info[${number}].increment()\" aria-pressed=\"false\" autocomplete=\"off\">Support</button></div></li>";
		document.getElementByID("inner lists").innerHTML += info;
		document.getElementByID(this.number.toString()).innerHTML = Number(this.viewVotes()/attributors).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});

	}
}
