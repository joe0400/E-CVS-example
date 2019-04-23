inp = open("body1.txt","r")
out = open("page2.html","a")

for l in inp:
	out.write(l)

out.close()
inp.close()

