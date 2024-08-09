const questionsRoad = document.querySelector(".questions");
const roadList = document.querySelector(".list");
// console.log(questionsRoad,roadList);


function renderRoad(road , node){
    road.filter(item => {
        const newItem = document.createElement("li");
        const roadImg = document.createElement("img");
const
        roadImg.src = item.symbol_img;


        questionsRoad.textContent = randomQuestion

        newItem.append(roadImg)

        newItem.className = "item"

        node.append(newItem);
    })
}

renderRoad(roadSymbol, roadList)