function produceReport(){
    let data=[];
    data[0]=parseInt(document.getElementById("shedA").value);
    data[1]=parseInt(document.getElementById("shedB").value);
    data[2]=parseInt(document.getElementById("shedC").value);
    data[3]=parseInt(document.getElementById("shedD").value);

    let sumData=data[0]+data[1]+data[2];
    let tdProduction=data[0]+data[1]+data[2]+data[3];
    //daily data output
    document.getElementById("outputData").innerHTML+="<br>";
    document.getElementById("outputData").innerHTML+="<p>Your production for Shed A is" +" "+data[0]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>Your production for Shed B is" +" "+data[1]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>Your production for Shed C is"+" "+data[2]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>Your pruduction for Shed D is"+" "+data[3]+" "+"Litres per day</p>";
    document.getElementById("outputData").innerHTML+="<p>The total production is"+" "+tdProduction+" "+"Litres per day</p>";


    //wekly totals lts
    let weeklyInc=tdProduction*7;
    let yearlyInc=tdProduction*365;
    document.getElementById("outputData").innerHTML+="<hr>"
    document.getElementById("outputData").innerHTML+="<p>Your weekly income will be Ksh."+" "+weeklyInc+"</p>";
    document.getElementById("outputData").innerHTML+="<p>Your yearly income will be Ksh."+yearlyInc;
    document.getElementById("outputData").innerHTML+="<hr>"


    //leap year monthly totals Ksh.
    let janInc=tdProduction*31;
    let febInc=tdProduction*29;
    let marchInc=tdProduction*31;
    let aprinc=tdProduction*30;
    let mayInc=tdProduction*31;
    let juninc=tdProduction*30;
    let julInc=tdProduction*31;
    let augInc=tdProduction*31;
    let sepInc=tdProduction*30;
    let octinc=tdProduction*31;
    let novInc=tdProduction*30;
    let decInc=tdProduction*31;

    document.getElementById("outputData").innerHTML+="<br>";
    document.getElementById("outputData").innerHTML+="<hr>"
    document.getElementById("outputData").innerHTML+="<p>Your income for January is"+" "+janInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for February is"+" "+febInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for March is"+" "+marchInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for April is"+" "+aprinc;
    document.getElementById("outputData").innerHTML+="<p>Your income for May is"+" "+mayInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for June is"+" "+juninc;
    document.getElementById("outputData").innerHTML+="<p>Your income for July is"+" "+julInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for August is"+" "+augInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for September is"+" "+sepInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for October is"+" "+octinc;
    document.getElementById("outputData").innerHTML+="<p>your income for November is"+" "+novInc;
    document.getElementById("outputData").innerHTML+="<p>Your income for december is"+" "+decInc;
}
function resetPage(){
    document.getElementById("outputData").remove("innerHTML");
    location.reload();
}