io1 = open("100-0.txt","r")
out1 = open("header1.txt","w")
out2 = open("body1.txt","w")
acttxt = ["ACT I. SCENE", "ACT II. SCENE", "ACT III. SCENE", "ACT IV. SCENE", "ACT V. SCENE", "ACT VI. SCENE"]

n = 0
for l in io1:
	l = ' '.join(l.split())
	var = False
	for g in acttxt:
		if g in l:
			var = True
			break
	if var:
		if n != 0:
			out1.write("</a></li>")
		out1.write("<li class=\"nav-item")
		if n == 0:
			out1.write("active")
		out1.write("\"><a class=\"nav-link\" href=\"#" + l + "\">" + l)
		if n != 0:
			out2.write("</div><div class=\"col\"></div></div>")
		out2.write("<div class=\"row\"><div class=\"col\"></div><div class=\"col-8\"><h4 id=\""+l+"\">"+l+"</h4><br>")
		n += 1
	else:
		out2.write(l+"<br>")

out2.write("</div><div class=\"col\"></div></div>")
out1.write("</a></li>")
out1.close()
out2.close()
io1.close()
