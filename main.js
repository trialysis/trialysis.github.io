

function parseCategory(input) {
    let category = input.split("（", 1);
    return category.toString()
}

function parseAgeGroup(input) {
    let category = input.split("（");
    if (category[1] === undefined) {
        return -1
    } else {
        let newString = category[1].split("）", 1);
        return newString[0];
    }

}

function createCategorySelect(categories) {
    let categorySelect = document.getElementById("category_select");
    
    let newSelect = document.createElement("SELECT");
    newSelect.setAttribute("id", "category");
    newSelect.addEventListener("change", categoryChange);

    let newLabel = document.createElement("LABEL");
    newLabel.setAttribute("for", "category");
    newLabel.innerText = "选择赛事项目";
    categorySelect.appendChild(newLabel);
    
    for (let category of categories) {
        let newOption = document.createElement("OPTION");
        newOption.innerText = category;
        newSelect.appendChild(newOption);
    }
    categorySelect.appendChild(newSelect);

}

function createAgeGroupSelect(ageGroups) {
    let ageSelect = document.getElementById("age_select");
    
    let newSelect = document.createElement("SELECT");
    newSelect.setAttribute("id", "age_group");
    newSelect.addEventListener("change", ageGroupChange);
    
    let newLabel = document.createElement("LABEL");
    newLabel.setAttribute("for", "age_group");
    newLabel.innerText = "选择年龄组";
    ageSelect.appendChild(newLabel);
    
    for (let ageGroup of ageGroups) {
        let newOption = document.createElement("OPTION");
        newOption.innerText = ageGroup;
        newSelect.appendChild(newOption);
    }
    ageSelect.appendChild(newSelect);
}

function processData(results) {
    let ageGroups = ["所有的"];
    let categories = [];
    
    for (let result of results) {
        console.log(result);
        let category = parseCategory(result[1]);
        let ageGroup = parseAgeGroup(result[1]);
        result.splice(1, 1, category, ageGroup);
        console.log(result);

        if (!categories.includes(category) && category.length !== 0) {
            categories.push(category);
        }
        if (!ageGroups.includes(ageGroup) && ageGroup !== -1) {
            ageGroups.push(ageGroup);
        }
    }
    console.log(categories);
    console.log(ageGroups);

    createCategorySelect(categories);
    createAgeGroupSelect(ageGroups);

    return results;
}

var results = processData(data);
categoryChange()




/*
fetch('./whole_event.json')
    .then((response) => response.json())
    .then((json) => processData(json));

*/