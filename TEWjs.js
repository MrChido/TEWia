const p1= document.getElementById("soloplay")
const p2= document.getElementById("2players")
const p3= document.getElementById("3players")
const p4= document.getElementById("4players")


p1.addEventListener('click',()=>{
	p3H.hidden=true;
	m3.hidden=true;
	r3.hidden=true;
	w3.hidden=true;
	p4H.hidden=true;
	m4.hidden=true;
	r4.hidden=true;
	w4.hidden=true;
});

p2.addEventListener('click',()=>{
	p3H.hidden=true;
	m3.hidden=true;
	r3.hidden=true;
	w3.hidden=true;
	p4H.hidden=true;
	m4.hidden=true;
	r4.hidden=true;
	w4.hidden=true;

});

p3.addEventListener('click',()=>{
	p3H.hidden=false;
	m3.hidden=false;
	r3.hidden=false;
	w3.hidden=false;
	p4H.hidden=true;
	m4.hidden=true;
	r4.hidden=true;
	w4.hidden=true;
});

p4.addEventListener('click',()=>{
	p3H.hidden=false;
	m3.hidden=false;
	r3.hidden=false;
	w3.hidden=false;
	p4H.hidden=false;
	m4.hidden=false;
	r4.hidden=false;
	w4.hidden=false;

});