

function calculate(){
    let bill= document.getElementById("bill").value;
    let people= document.getElementById("people").value;
    let service= document.getElementById("service").value;

    if (bill==="" || service==0) {
        window.alert("fill the blanks fool");
    }
    if (people==="" || people<=1){
        people=1;
        document.getElementById("each").style.display="none";
    }else{
        document.getElementById("each").style.display="block";
    }
    let tipAmt= (bill * service) / people;
    tipAmt=Math.round(tipAmt*100)/100;
    tipAmt= tipAmt.toFixed(2);

document.getElementById("amt").style.display="block";
document.getElementById("tip").innerHTML=tipAmt;

    // document.write(tipAmt)

}
document.getElementById("amt").style.display="none";
document.getElementById("each").style.display="none";
document.getElementById("button").onclick= function(){calculate();};
