function displayEarbuds(imageDirNoColAdded, title, price, description, ...colors) {
    $("body").append(`
        <div id="earbuds-${title.split(" ").join("")}" style="display: flex;">
            <div class="jqueryEarbuds">
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

const assetHook = "./assets/frequency-earbud-";
displayEarbuds(assetHook, "Wireless Frequency Buds Model Z", "$110.00", "Fulfilling wireless earbuds that provide you with the quality, ease of use, and comfortability you deserve.", "white", "pink", "blue");

displayEarbuds(assetHook, "Wired Frequency Buds Model O", "$35.00", "Audio quality like no other pair of earbuds. ", "grey", "lime", "red");




// SIMILAR DIR NAMES ARE NECESSARY 


$("button").click(function () {
    let buttonClicked = $(this).attr("name")
    buttonClicked = buttonClicked.split("-");
    for (let i in buttonClicked) {
        if (buttonClicked[i] === "rgb(230, 232, 235)") {
            buttonClicked[i] = "white"
        }
    }
    $(`img#img-${buttonClicked[2]}`).attr("src", `.${assetHook}${buttonClicked[1]}.png`)
})