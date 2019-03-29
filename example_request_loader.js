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

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

const attributors = 312;
var number = 0;

var info = new Array();

var names = ["a","b","c","d","e"];
var usernames = ["f","g","h","i","j"];
var loremIpsum = "lorem ipsum dolor itum";
var tvotes = [99,20,13,40,80];
var dates = [1,8,2,13,12];

class information{
	constructor(name,information,total_votes,description_text,username,date){
		this.name = name;
		this.information = information;
		this.total_votes = total_votes;
		this.description_text = description_text;
		this.username = username;
		this.toggle = false;
		this.date = date;
		this.number = number;
		this.viewName = function viewName(){	return this.name;};
	this.viewInfo = function viewInfo(){	return this.information;};
	this.viewVotes = function viewVotes(){	return this.total_votes;};
	this.viewDescr = function viewDescr(){	return this.description_text;};
	this.viewUser = function viewUser(){	return this.username;};
	this.viewDate = function viewDate(){	return this.date;};

	this.increment = function increment(){
		if(this.toggle)
			this.total_votes--;
		else
			this.total_votes++;
		this.toggle = !this.toggle;
		document.getElementById(this.number.toString()).innerHTML = Number(this.viewVotes()/attributors).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
	};
	
	this.generate = function generate(){
		var vr = Number(this.viewVotes()/attributors).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
		var dat = "<li class=\"list-group-item\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">%s</h5><small class=\"text-right text-nowrap\">%s days ago <u class=\"text-warning\" id=\"%s\" style=\"text-decoration: none !important;\">%s</u></small></div><small> @%s </small><p class=\"mb-1\">%s</p><div class=\"btn-group float-right\" role=\"group\" aria-label=\"Support\"><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" onclick=\"info[%s].increment()\" aria-pressed=\"false\" autocomplete=\"off\">Support</button></div></li>";
	dat = parse(dat,this.name,this.date.toString(),this.number.toString(),vr.toString(),this.username,this.description_text,number.toString());
		document.getElementById("inner lists").innerHTML += dat;

	};
		info.push(this);
		this.generate();
		number++;
	}
	
}
for(var i = 0;i<5;i++){
	new information(names[i],loremIpsum,tvotes[i],loremIpsum,usernames[i],dates[i]);
}

