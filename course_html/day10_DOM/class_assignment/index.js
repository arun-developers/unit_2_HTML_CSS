var data = [
    {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name: "LATEST MEN’S SNEAKER",
        price: "$25.00",
        strikedOffPrice: "$95.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name: "LATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name: "LATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    },
    {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name: "LATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }
]
data.map(function (elements, index, array) {
    var box = document.createElement("div");
    box.setAttribute("class","boxes");

    var img = document.createElement("img");
    img.src = elements.imgUrl;
    img.setAttribute("class", "image");

    var name = document.createElement("h3");
    name.textContent = elements.name;
    img.setAttribute("class", "head3");

    var price = document.createElement("h1");
    price.textContent = elements.price;
    price.setAttribute("class", "head1");

    var strikedOffPrice = document.createElement("s");
    strikedOffPrice.textContent = elements.strikedOffPrice;
    img.setAttribute("class", "strike");

    box.append(img,name,price,strikedOffPrice);
    document.querySelector("#container").append(box);
})