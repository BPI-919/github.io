let classIdentifier = 0;
let text = "";
let color = "";
let red = 0;
let green = 0;
let blue = 0;

function colorGen() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

text = "Text";

for (let j = 0; j < document.getElementsByClassName("row").length; j++) {
    classIdentifier = ((j + 1) * 2);
    color = colorGen();
    for (let i = 0; i < (document.getElementsByClassName(classIdentifier.toString()).length); i++) {
        document.getElementsByClassName((classIdentifier - 1).toString()).item(i).innerHTML = text + "-" + (j + 1) + " ";
        document.getElementsByClassName(classIdentifier.toString()).item(i).innerHTML = color;

        document.getElementsByClassName((classIdentifier - 1).toString()).item(i).style.color = color;
        document.getElementsByClassName(classIdentifier.toString()).item(i).style.color = color;
    }
}
