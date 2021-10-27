

let colors = ['#edf6f9','#EB1782','#F42833','#01A0C7','#EB9327','#41A62A','#EF476F','#FFD166','#06D6A0','#118AB2','#ff3c38'];

for (let i = 11000; i >= 1000; i-=1000) 
{
    setTimeout(function () {
        if(i===11000)
        document.getElementById("h").innerHTML = "Happy Birthday!!!";
        else
        document.getElementById("h").innerHTML =((11000-i)/1000);

        document.getElementById("h").style.color = colors[i/1000];
    }, i)
}




