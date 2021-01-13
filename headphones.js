function displayHeadphone(imageDirNoColAdded, title, price, description, ...colors) {
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

const assetHook = "./assets/frequency-modelX-"
displayHeadphone(assetHook, "Frequency Model X Wireless", "$59.99", "Headphones designed for a luxury experience. Seamless bluetooth pairing, great for any task, and amazing audio quality.", "red", "black", "blue", "purple");
displayHeadphone(assetHook, "Frequency Model W Wired", "$35.00", "A solid pair of headphones that are reliable and performs efficiently. ", "cyan", "white", "lime");


$("button").click(function () {
    let buttonClicked = $(this).attr("name")
    buttonClicked = buttonClicked.split("-");
    for (let i in buttonClicked) {
        if (buttonClicked[i] === "rgb(230, 232, 235)") {
            buttonClicked[i] = "white"
        }
    }
    $(`img#img-${buttonClicked[2]}`).attr("src", `${assetHook}${buttonClicked[1]}.png`)
})