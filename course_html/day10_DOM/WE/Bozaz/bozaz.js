// Points for using form
// 1. wrap every input inside form tag
// 2. instead of taking button, use input type=submit
// 3. Add eventListener to form tag
// 4. event name should be submit
// 5. whenever you use forms, it will try to send data to server, in this process page is getting refreshed -- it is default behaviour
//6. we should prevent that default behaviour - event.preventDefault()
document.querySelector("form").addEventListener("submit", Product);
function Product() {
    event.preventDefault();
    var productpriority = document.querySelector("#category").value;
    var producttitle = document.querySelector("#name").value;
    var productprice = document.querySelector("#price").value;
    console.log(productpriority, producttitle, productprice);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = productpriority;
    var td2 = document.createElement("td");
    td2.innerText = producttitle;
    var td3 = document.createElement("td");
    td3.innerText = productprice;
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);



}