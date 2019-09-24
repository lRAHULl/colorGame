window.onload = () => {
    colorGame();
}

function randomColor() {
    let maxColorValue = 255;
    let randomNumberRed = Math.floor(Math.random() * maxColorValue);
    let randomNumberGreen = Math.floor(Math.random() * maxColorValue);
    let randomNumberBlue = Math.floor(Math.random() * maxColorValue);
    return "rgb(" + randomNumberRed + ", " + randomNumberGreen + ", " + randomNumberBlue + ")";
}

function colorGame() {

    let body = document.getElementById('root');
    let child = body.lastElementChild;
    while (child) { 
        body.removeChild(child); 
        child = body.lastElementChild; 
    }

    let answerColor = document.getElementById("answerColor");
    let result = document.getElementById("result");
    result.innerText = "";
    
    let slider = document.getElementById("myRange");
    let linesInTile = 5;
    let noOfTiles = slider.value;
    let level = document.getElementById("level");
    if (noOfTiles < 11) {
        level.innerText = "Easy";
    } else if (noOfTiles < 21) {
        level.innerText = "Medium";
    } else if (noOfTiles < 31) {
        level.innerText = "Hard";
    }else if (noOfTiles < 41) {
        level.innerText = "Harder";
    } else {
        level.innerText = "Hardest";
    }
    for (let i = 0; i < noOfTiles; i++) {
        if (i % linesInTile == 0){
            let br = document.createElement('br');
            body.appendChild(br);
        } 
        let div = document.createElement('div');
        div.className = "tile";
        body.appendChild(div);

    }

    let tiles = document.getElementsByClassName('tile');
    let colors = [];

    for (let i = 0; i < tiles.length; i++) {
        var color = randomColor();
        colors.push(color);
        console.log(color)
        tiles[i].style.backgroundColor = color;
    }


    let mainColor = colors[Math.floor(Math.random() * tiles.length)];

    answerColor.innerText = mainColor;

    for (let looper = 0; looper < tiles.length; looper++) {

        console.log(tiles[looper].style.backgroundColor)
        console.log(colors[looper])
        tiles[looper].addEventListener("click", () => {
            if (mainColor == tiles[looper].style.backgroundColor) {

                result.innerText = "You are Right :)";
                for (let looper1 = 0; looper1 < tiles.length; looper1++) {
                    tiles[looper1].style.backgroundColor = mainColor;
                }
            }
            else {
                result.innerText = "You are Wrong :(";
                tiles[looper].style.backgroundColor = "black";
            }
        });
    }
}
document.getElementById("reset").addEventListener("click", colorGame);
document.getElementById("button").addEventListener("click", colorGame);