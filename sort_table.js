function createUpArrow() {
    let svgString = `<svg xmlns="http://www.w3.org/2000/svg" id="up_arrow" width="1em" viewBox="0 0 16 16">
        	<path d="M4 16 L8 6 L12 16 z" stroke="currentColor" stroke-width="1" fill="currentColor"/>
        </svg>`
    return svgString
}



function sort() {
    console.log("sort");

    let heading;

    if (event.target.tagName === "path") {
        heading = event.target.parentElement.parentElement;
    } else {
        if (event.target.tagName === "svg") {
            heading = event.target.parentElement;
        } else {
            heading = event.target;
        }
    }
    let sortBy = heading.innerText.trim();

    console.log(sortBy);

    let column;
    switch (sortBy) {
        case "参赛号":
            column = 0;
            break;
        case "游泳":
            column = 1;
            break;
        case "T1":
            column = 2;
            break;
        case "自行车":
            column = 3;
            break;
        case "T2":
            column = 4;
            break;
        case "跑步":
            column = 5;
            break;
        case "净成绩":
            column = 6;
            break;
    }
    console.log(column);

    let upArrow = document.getElementById("up_arrow");
    upArrow.remove();

    heading.appendChild(upArrow); 
    

    let table = heading.parentElement.parentElement.parentElement.getElementsByTagName("TBODY")[0]

    console.log(table);

    let rows = table.rows;
    let length = rows.length;

    console.log(rows);
    console.log(length);

    tableData = new Array();

    
    //https://codereview.stackexchange.com/questions/37632/sorting-an-html-table-with-javascript   
    
    for (let i=0; i<rows.length; i++){
        cells = rows[i].cells;
        tableData[i] = new Array();
        for (let j=0; j<cells.length-1; j++) {
            tableData[i][j] = cells[j+1].innerText;
        }
    }

    tableData.sort(function(a,b) {
                if (a[column] === b[column]) {
                    return 0;
                }
                
                if (a[column] > b[column]) {
                    return 1;
                }
                return -1;
            });  

    
    console.log(tableData);

    for(let i=0; i<tableData.length; i++){
        let j=i+1;
        tableData[i] = "<td>" + j + "</td><td>"+tableData[i].join("</td><td>")+"</td>";
    }
    table.innerHTML = "<tr>"+tableData.join("</tr><tr>")+"</tr>";

    
}
