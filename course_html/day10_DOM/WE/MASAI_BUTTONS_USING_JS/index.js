var buttonObj = [
        { textContent: "Primary", color: "white", bgColor: "blue" },
        { textContent: "Secondary", color: "white", bgColor: "grey" },
        { textContent: "Danger", color: "white", bgColor: "red" },
        { textContent: "Warning", color: "black", bgColor: "yellow" },
        { textContent: "Info", color: "white", bgColor: "cyan" },
        { textContent: "Light", color: "black", bgColor: "white" },
        { textContent: "Success", color: "white", bgColor: "green" },
        { textContent: "Dark", color: "white", bgColor: "black" },
        { textContent: "Link", color: "blue", bgColor: "white" },
    ];
    buttonObj.map(function (elements, index, array) {
        var button1 = document.createElement("button");
        button1.textContent = elements.textContent;
        button1.style.backgroundColor = elements.bgColor;
        button1.style.color = elements.color;
        button1.setAttribute("class", "btn");
        document.querySelector("body").append(button1);

    })
