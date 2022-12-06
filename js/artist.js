var cur_artist = parseInt(getCookie("artist"), 10);
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

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
    initHeader();
    initBiography();
    initSlider();
});

function initHeader() {
    console.log(typeof (cur_artist));
    console.log(cur_artist);
    console.log(data);

    const fullscreen = document.querySelector('.fullscreen');
    const welcome_a = document.querySelector('.welcome-title');

    fullscreen.setAttribute("src", data[cur_artist].main_img_res);
    welcome_a.textContent = data[cur_artist].name;
}

function initBiography() {
    const biography = $('.biography');
    for (let i = 0; i < data[cur_artist].biography.length; i++) {
        let temp = data[cur_artist].biography[i];
        biography.append("<h2><br>" + temp.title + "</h2>");
        for (let des of temp.objects)
            biography.append("<p><br>" + des + "</p>");
    }
}

var intro_slider_images;
const intro_slider_img = document.querySelector('.intro_slider_img');
const intro_slider_des = document.querySelector('.intro_slider_description');

function initSlider() {
    intro_slider_img.src = data[cur_artist].images[0].image_res;
    console.log(data[cur_artist].images.image_res);
    intro_slider_des.textContent = data[cur_artist].images[0].image_descr;
    intro_slider_images = data[cur_artist].images;

}

const intro_dots = document.querySelectorAll('.slider_dot');

let current_intro_slider_img = 0;

function slide(direction) {
    if (current_intro_slider_img == 0 && direction == -1)
        current_intro_slider_img = intro_slider_images.length - 1;
    else
        current_intro_slider_img = (current_intro_slider_img + direction) % intro_slider_images.length;
    intro_slider_img.src = intro_slider_images[current_intro_slider_img].image_res;
    intro_slider_des.textContent = intro_slider_images[current_intro_slider_img].image_descr;
    intro_dots.forEach((dot) => { dot.classList.remove('active_slider_dot') });
    intro_dots.item(current_intro_slider_img).classList.add('active_slider_dot');
}

function changeIndex(index) {
    intro_slider_img.src = intro_slider_images[index].image_res;
    intro_slider_des.textContent = intro_slider_images[index].image_descr;
    intro_dots.forEach((dot) => { dot.classList.remove('active_slider_dot') });
    intro_dots.item(index).classList.add('active_slider_dot');
}