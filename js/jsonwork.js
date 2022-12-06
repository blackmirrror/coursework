var rawFile;
function readTextFile(file, callback) {
    rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var data;
readTextFile("data.json", function (text) {
    data = JSON.parse(text); //parse JSON
    console.log(data);
});