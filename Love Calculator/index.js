var love= Math.floor(Math.random()*100) +1;
var Totallove= love + "%";
document.querySelector(".top1").innerHTML= Totallove;
if(love>=90) 
    document.querySelector(".Mid").innerHTML= "Made For Each Other💖";
else if(love>=80)
    document.querySelector(".Mid").innerHTML= "Wowww! Marry Asap!💍🌟";
else if(love>=70)
    document.querySelector(".Mid").innerHTML= "Close Friends!🫂";
else if(love>=60)
    document.querySelector(".Mid").innerHTML= "Good Friends!🤝";
else if(love>=40)
    document.querySelector(".Mid").innerHTML= "Friends!";
else 
    document.querySelector(".Mid").innerHTML= "Why are you guys even talkingg?💔";

