const categoryBtns = document.querySelectorAll(".category_btn")
const modal = document.querySelector("#modal")
const projModal = document.querySelector("#projectModal")

const categoryCardStructure = '\
<div class="category_card proj" id={PROJECT_ID}>\
    <img src="{IMAGE_URL}">\
    <h2>{PROJECT_NAME}</h2>\
</div>';

var data;
fetch("projects.json")
    .then(response => response.json())
    .then(json => data = json)
    .then(() => console.log(data));

for (let btn of categoryBtns){
    btn.addEventListener("click", () => {
        console.log("Clicked on category button! ID:", btn.id);
        var content = '';
        for (let category of data) {
            if (category.id == btn.id){
                for (let project of category.members){
                    console.log(project.title);
                    content = content + `\
                    <div class="category_card proj">\
                        <img src="${project.image}">\
                        <h2>${project.title}</h2>\
                    </div>`;
                }
                break;
            }
        }
        console.log(content);
        modal.querySelector(".items").innerHTML = content;
        let projs = document.querySelectorAll(".proj");
        for (let p of projs) {
            p.addEventListener("click", () => {
                console.log("Clicked on project button!");
                projModal.style.display = "block";
            })
        }
        modal.style.display = "block";
    })
}

modal.querySelector('.close').addEventListener('click', () => {
	modal.style.display = "none";
})

projModal.querySelector('.close').addEventListener('click', () => {
	projModal.style.display = "none";
})

