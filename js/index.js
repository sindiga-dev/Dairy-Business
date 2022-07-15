function produceReport()
{
    let data=[];
    data[0]=parseInt(document.getElementById("shedA").value);
    data[1]=parseInt(document.getElementById("shedB").value);
    data[2]=parseInt(document.getElementById("shedC").value);
    data[3]=parseInt(document.getElementById("shedD").value);

    let sumData=data[0]+data[1]+data[2]
    document.getElementById("outputData").innerHTML=sumData;
}




function resetPage(){
    
}