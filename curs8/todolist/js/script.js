// pas 1 adauga elemente

var nrProduse=0
function addProduct(){
  
    let product = document.getElementById('product').value;
    if(!product)
    return;
    const text ="<li class='product'>"+
    product+"<span id ='"+nrProduse+"'>Sterge</span><li>"
    document.getElementById('list').insertAdjacentHTML('beforeend', text)
    document.getElementById('product').value = '';
    nrProduse = nrProduse+1;
    if (typeof(Storage) !== "undefined") {
        //Store
        localStorage.setItem(nrProduse,text);
        localStorage.setItem('numar Produse', nrProduse)
    }
}

const button = document.getElementById('add');
button.addEventListener('click', addProduct);

//pas2 selectam / deselectem produsele
document.getElementById('list').addEventListener('click', function(event){
    const element = event.target;
    element.classList.toggle("done");
});
//pas 3 afisam produsele din local storage
window.onload = function (){
    var nr = (localStorage.getItem('numarProduse'));
    let i;
    if (typeof(Storage) !== "undefined" && nr>0) {
        nrProduse = Number(nr);
        for (i=1; i<= nr; i++) {
            //Retrive
            document.getElementById("list").insertAdjacentHTML('beforeend', localStorage.getItem(i));
        }
    }
    else{
        nrProduse = 0;
    }
}

//pas 4 stergem produsele din local storage
document.getElementById('list').addEventListener('dbclick', function(event){
    const element = event.target;
    let storageKey = Number(element.id) + 1;
    nrProduse = nrProduse - 1;
    alert(nrProduse)

    localStorage.removeItem(storageKey);
    ;

    //face un reload pentru pagina
    location.reload()
});