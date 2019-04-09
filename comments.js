
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

function commentLibrary(num){
	
	
	class tree{
		
		constructor(){

			this.head = this.node(null);
			
			this.add = function (text,username,args){
				if(args.length == 0){
					this.head.addChild(this.node(text,username,this.head));
					this.head.srt();
				}
				else{
						this.head.traverse(args).addChild(this.node(text,username,this.head.traverse(args)));
					this.head.traverse(args).srt();
				}
			};
			this.generate = function (){
				var txt = "";
				for ( var j : this.head.children ) {
					txt += j.generate();
				}
				document.getElementById('comments').innerHTML = txt;
				
			};
				
			
		}
		
			
		
		class node{
			
			constructor(text,username,parent){
				
				this.parent = parent;
				this.text = text;
				this.username = username;
				
				this.children = Array();
				this.addChild = function (child){
					this.children.push(child);
					
				};
				this.traverse = function (...args){
					return this.children[args[0]].traverse(args.slice(1,args.length));
				};

				this.getLength = function (){
					var l = 0;					
					for(var j: this.children){
						var n = j.getLength()+1;
						if(l<n)
							var l = n;
					}
					return l;
				};
				this.srt = function (){
					this.children.sort(function (a,b){return b.getLength()-a.getLength()});
					
				};
				this.generate = function (){
					var s = "";
					var txt = "<div class=\"card border-top-0 border-right-0 border-bottom-0\"><div class=\"card-body\"><small class=\"card-subtitle mb-2 text-muted\">@%s</small>%s<p class=\"card-text\">%s</p></div></div>";
					var interior = "";
					for ( var j : this.children )
						interior += j.generate();
					txt = parse(txt,this.username,interior,this.text);
					return txt;
				};
				
			}
		}
	}	
	
	this.number = num;
	
	
	
	
}
