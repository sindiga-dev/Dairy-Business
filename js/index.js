function totalProduction()
{
    Shed_A=document.getElementById("shedA").value;
    Shed_B=document.getElementById("shedB").value;
    Shed_C=document.getElementById("shedC").value;
    shed_D=document.getElementById("shedD").value;
    document.getElementById("summary").innerHTML=(parseInt(Shed_A+Shed_B+Shed_C+shed_D));
    
}