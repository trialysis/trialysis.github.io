

function categoryChange() {
    let categoryFilteredResults = [];

    let categorySelect = document.getElementById("category");
    let category = categorySelect.value;

    for (let result of results) {
        if (result[1] === category) {
            categoryFilteredResults.push(result);
        }
    }

    console.log(categoryFilteredResults);


    let ageCategoryFilteredResults = [];
    
    let ageSelect = document.getElementById("age_group")
    let ageGroup = ageSelect.value;

    console.log(ageGroup);

    if (ageGroup === "所有的") {
        ageCategoryFilteredResults = categoryFilteredResults;
        console.log(ageCategoryFilteredResults);
    } else {
        for (let result of categoryFilteredResults) {
            if (result[2] === ageGroup) {
                ageCategoryFilteredResults.push(result);
            }
        }
    }
    console.log(ageCategoryFilteredResults);
    createTable(ageCategoryFilteredResults);
}


function ageGroupChange() {
    let ageFilteredResults = [];
    let ageGroup = event.target.value;

    if (ageGroup === "所有的") {
        ageFilteredResults = results;
    } else {
        for (let result of results) {
            if (result[2] === ageGroup) {
                ageFilteredResults.push(result);
            }
        }
    }



    let ageCategoryFilteredResults = [];

    let categorySelect = document.getElementById("category");
    let category = categorySelect.value;

    for (let result of ageFilteredResults) {
        if (result[1] === category) {
            ageCategoryFilteredResults.push(result);
        }
    }

    console.log(ageCategoryFilteredResults);

    createTable(ageCategoryFilteredResults);
    
}

//createTable();

function createTable(resultsData) {
    let tableDiv = document.getElementById("table_div");

    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.firstChild);
    }

    let newTable = document.createElement("TABLE");
    let newThead = document.createElement("THEAD");
    let newTr = document.createElement("TR");

    let newTh0 = document.createElement("TH");

    let newTh1 = document.createElement("TH");
    newTh1.addEventListener("click", sort);
    newTh1.innerHTML = "参赛号 " +
        `<svg xmlns="http://www.w3.org/2000/svg" id="up_arrow" width="1em" viewBox="0 0 16 16">
        	<path d="M4 16 L8 6 L12 16 z" stroke="currentColor" stroke-width="1" fill="currentColor"/>
        </svg>`;
    
    let newTh2 = document.createElement("TH");
    newTh2.addEventListener("click", sort);
    newTh2.innerHTML = "游泳 ";
    
    let newTh3 = document.createElement("TH");
    newTh3.addEventListener("click", sort);
    newTh3.innerHTML = "T1 ";
    
    let newTh4 = document.createElement("TH");
    newTh4.addEventListener("click", sort);
    newTh4.innerHTML = "自行车 ";
    
    let newTh5 = document.createElement("TH");
    newTh5.addEventListener("click", sort);
    newTh5.innerHTML = "T2 ";
    
    let newTh6 = document.createElement("TH");
    newTh6.addEventListener("click", sort);
    newTh6.innerHTML = "跑步 ";
    
    let newTh7 = document.createElement("TH");
    newTh7.addEventListener("click", sort);
    newTh7.innerHTML = "净成绩 "

    newTr.appendChild(newTh0);
    newTr.appendChild(newTh1);
    newTr.appendChild(newTh2);
    newTr.appendChild(newTh3);
    newTr.appendChild(newTh4);
    newTr.appendChild(newTh5);
    newTr.appendChild(newTh6);
    newTr.appendChild(newTh7);

    newThead.appendChild(newTr);

    newTable.appendChild(newThead);

    let newTbody = document.createElement("TBODY");
    
    for (let i=0; i<resultsData.length; i++) {
        result = resultsData[i];
        console.log(result);
        
        let newTr = document.createElement("TR");

        let newTd0 = document.createElement("TD");
        newTd0.innerText = i+1;

        let newTd1 = document.createElement("TD");
        newTd1.innerText = result[0];

        let newTd2 = document.createElement("TD");
        let newTd3 = document.createElement("TD");
        let newTd4 = document.createElement("TD");
        let newTd5 = document.createElement("TD");
        let newTd6 = document.createElement("TD");
        let newTd7 = document.createElement("TD");
        

        try {
            newTd2.innerText = result[4][3];
            newTd3.innerText = result[5][3];
            newTd4.innerText = result[6][3];
            newTd5.innerText = result[7][3];
            newTd6.innerText = result[8][3];
            newTd7.innerText = result[8][2];
        } catch {
            newTd2.innerText = "DNF";
            newTd3.innerText = "DNF";
            newTd4.innerText = "DNF";
            newTd5.innerText = "DNF";
            newTd6.innerText = "DNF";
            newTd7.innerText = "DNF";
        }
        
        newTr.appendChild(newTd0);
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTr.appendChild(newTd4);
        newTr.appendChild(newTd5);
        newTr.appendChild(newTd6);
        newTr.appendChild(newTd7);

        newTbody.appendChild(newTr);
    }
    newTable.appendChild(newTbody);
    tableDiv.appendChild(newTable);
    
}