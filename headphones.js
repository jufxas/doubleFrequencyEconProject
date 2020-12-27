function displayHeadphone (imageDirNoColAdded, title, price, description, ...colors) {
    $("body").append(`
        <div id="headphone-${title.split(" ").join("")}" style="display: flex;">
            <div class="jqueryHeadphone">
                <img src = ${imageDirNoColAdded}${colors[0]}.png width="350" 
                height="350" 
                id="img-${title.split(" ").join("")}" >
            </div>

            <div class="productInfo">
                <a style="font-family: 'Alegreya Sans SC', sans-serif;">${title}</a>
                <p style="font-size:20px;">${description}</p>
                <br>

                <div id="circleContainer${title.split(" ").join("")}"></div>

                <br>
                <div>${price}</div>
            </div>
        </div>
    `)

    for (let i in colors) {
        if (colors[i] === "white") {
            colors[i] = "rgb(230, 232, 235)"
        }
    }

    for (const color of colors) {
        $(`div#circleContainer${title.split(" ").join("")}`).append(`
        <button style="background-color: ${color};
        border: 1px solid rgba(0, 0, 0, 0);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        display: inline-block;" name="btn-${color}-${title.split(" ").join("")}">
        </button>
    `)
    }
}

displayHeadphone("./assets/example-headphone-col-", "Headphone Name", "$69.99", "This is a sample description but I hope these non-existant headphones have good audio fidelity. This is a sample description but I hope these non-existant headphones have good audio fidelity.", "white", "pink", "black","blue");

displayHeadphone("./assets/example-headphone-col-", "Headphone Name2", "$69.99", "This is a sample description but I hope these non-existant headphones have good audio fidelity. This is a sample description but I hope these non-existant headphones have good audio fidelity.", "pink", "black", "white");



// SIMILAR DIR NAMES ARE NECESSARY 


$("button").click(function () { 
    let buttonClicked = $(this).attr("name")
    buttonClicked = buttonClicked.split("-");
    for (let i in buttonClicked) {
        if (buttonClicked[i] === "rgb(230, 232, 235)") {
            buttonClicked[i] = "white"
        }
    }
    $(`img#img-${buttonClicked[2]}`).attr("src",`./assets/example-headphone-col-${buttonClicked[1]}.png`)
})
