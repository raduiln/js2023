// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
   return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4>${item.title}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
            </div>
        </article>`;
   
}
function displayMenuButtons() {
    
   
}
function displayMenuitems(menuItem){

}
function displayMenuButons(){
    const categories=menu.reduce(
        function(values, item){
            if(!values.includes(itemcategory)){
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    }
const categoryBtns = categories.map(function (category, index){
    let btn_nr = 'btn'=(index+1);
    const categoryRo={
        all:'Tot',
        breackfast: 'Mic dejun',
        lunch: 'pranz',
        dinner: 'Cina',
        shskes:'Bauturi',
    }
    return `<button type="button"class="filter-btn" data-id=${category} data-nr=${btn_nr}>${categoryRo[category]}</button>`;
})
.join("")

btnContainer.innerHTML = categoryBtns;
const filerBtns = btnContainer.querySelectorAll(".filter-btn");
filerBtns.forEachListener("click", function (e){
    //console.log(e.currentTarget.dataset);
    //counterClick(e.curentTarget);
    const category = e.curentTarget.dataset.id;
    const menuCategory = menu.filter(functio(menuItem){
        //console.log(menuItem.category);
        if (menuItem.category === category){
            return menuItem
        });
        if (category === "all") {
            displayMenuitems(menu);
        } else{
            displayMenuitems(menuCategory);
        }
    })
}