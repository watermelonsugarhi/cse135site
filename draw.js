
async function drawBar(){
    var myData;
    await $.getJSON("https://watermelonsugarhi.site/api/performance",function(data){
        myData=data;
    });
    var id=[];
    var object1=[]
    var object2=[];
    var count=0;
    var i=0;
    while(count<5){
        if(myData[i].responseStart=="null"){
            i++;
        }else{
            object1.push(myData[i].responseStart);
            object2.push(myData[i].responseEnd);
            id.push(myData[i].id);
            count++;
            i++;
        }      
    }
    var myConfig = {
        "graphset": [{
            "type": "bar",
            "title": {
                "text": "Performance Data:responseStart vs responseEnd",
                "adjust-layout":true,
            },
            "scale-x": {
                "labels":id,
                "label": {
                    text: 'session_ID',
                }
            },
            "plotarea":{ 
                margin: 'dynamic',
                "adjust-layout":true, 
            },
            "scaleY": {
                // scale label with unicode character
                label: {
                    text: 'Time'
                }
            },
            "legend": {
                layout: "1x2", //row x column
                x: "20%",
                y: "8%",
                "adjust-layout":true,
            },
            "series": [
                {
                    values:object1,
                    "text": "responseStart",
                },
                {
                    values:object2,
                    "text": "responseEnd",
                }
            ]
        }]
    };
    zingchart.render({
        id: 'BarChart',
        data: myConfig,
        height: '100%',
        width: '100%'
    });
}
async function drawLine(){
    var myData;
    await $.getJSON("https://watermelonsugarhi.site/api/activity",function(data){
        myData=data;
    });
    var id=[];
    var object1=[]
    var object2=[];
    var object3=[];
    var count=0;
    var i=0;

    while(i<5){    
        if(JSON.parse(myData[0].mousePosition)[i]!=null){
            object1.push(JSON.parse(myData[0].mousePosition)[i].coordinates.clientX);
        }else{
            object1.push(0);
        }
        if(JSON.parse(myData[1].mousePosition)[i]!=null){
            object2.push(JSON.parse(myData[1].mousePosition)[i].coordinates.clientX);
        }else{
            object2.push(0);
        }
        if(JSON.parse(myData[2].mousePosition)[i]!=null){
            object3.push(JSON.parse(myData[2].mousePosition)[i].coordinates.clientX);
        }else{
            object3.push(0);
        }
                   
        i++;  
    }
    
    while(count<3){
        id.push(myData[count].id);
        count++;
    }
    
    var myConfig = {
        "graphset": [{
            "type": "line",
            "title": {
                "text": "Activity Data: Mouse Position(Client X)",
                "adjust-layout":true,
            },
            "scale-x": {
                // "labels":id,
                "label": {
                    text: 'Chronological order',
                }
            },
            "plotarea":{ 
                margin: 'dynamic',
                "adjust-layout":true,
            },
            "scaleY": {
                // scale label with unicode character
                label: {
                    text: 'Position'
                }
            },
            "legend": {
                layout: "1x3", //row x column
                x: "20%",
                y: "8%",
                "adjust-layout":true,
            },
            "series": [
                {
                    values:object1,
                    "text": "session_ID 1: "+ id[0],
                },
                {
                    values:object2,
                    "text":"session_ID 2: "+  id[1],
                },
                {
                    values:object3,
                    "text": "session_ID 3: "+ id[2],
                },
            ]
        }]
    };
    zingchart.render({
        id: 'LineChart',
        data: myConfig,
        height: '100%',
        width: '100%'
    });
}
async function drawPie(){
    var myData;
    await $.getJSON("https://watermelonsugarhi.site/api/static",function(data){
        myData=data;
    });
    var count=0;
    var object={};
    var objectName=[];
    var output=[];
    for(var entry in myData){
        if(object[myData[entry].userAgent]==null){
            object[myData[entry].userAgent]=1;
            objectName.push(myData[entry].userAgent);
        }else{
            object[myData[entry].userAgent]=object[myData[entry].userAgent]+1;
        }
        count++;
    }
    for(var name of objectName){
        var config={
            values: [object[name]/count],
            text: name,
        }
        output.push(config);
    }
    var myConfig = {
        "graphset": [{
            "type": "pie",
            "title": {
                "text": "Static Data: User Agent percentage",
                "adjust-layout":true,
            },
            "plotarea":{ 
                margin: 'dynamic',
                "adjust-layout":true,
            },
            "legend": {
                "adjust-layout":true,
            },
            "series": output,
        }]
    };
    zingchart.render({
        id: 'PieChart',
        data: myConfig,
        height: '100%',
        width: '100%'
    });
}
drawBar();
drawLine();
drawPie();

