function produceReport()
{
    let data=[];
    data[0]=parseInt(document.getElementById("shedA").value);
    data[1]=parseInt(document.getElementById("shedB").value);
    data[2]=parseInt(document.getElementById("shedC").value);
    data[3]=parseInt(document.getElementById("shedD").value);

    let sumData=data[0]+data[1]+data[2];
    let tdProduction=data[0]+data[1]+data[2]+data[3];
    document.getElementById("outputData").innerHTML+="<br>";
    document.getElementById("outputData").innerHTML+="<p>Your production for Shed A is" +" "+data[0]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>Your production for Shed B is" +" "+data[1]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>Your production for Shed C is"+" "+data[2]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>Your pruduction for Shed D is"+" "+data[3]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>The total production is"+" "+tdProduction+" "+"Litres per day</p>"

}
function resetPage(){
    document.getElementById("outputData").remove("innerHTML");
    location.reload();
}